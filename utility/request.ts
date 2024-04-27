// PACKAGES
import querystring from 'querystring';
import https from 'https';
import fs from 'fs';


// CREDENTIALS
import * as auth from "./auth";
import { IDefaultParams, IError } from '../types';


// TYPES
export interface RequestType {
  (url: string, params: {
    method: string,
    data?: string,
    headers?: { [key: string]: string },
    params?: { [key: string]: any };
    addons?: IDefaultParams;
  }): Promise<any & { error: string }>;
};


// VALUES
let total_retries = 0;


const sanitize_query = (obj: object): string => {
  const object: any = Object.assign({}, obj);

  const array = Object.keys(object);
  for (let i = 0; i < array.length; i++) {
    const key = array[i];
    const value = object[key];

    if (value != null) continue;
    delete object[key];
  };

  return querystring.encode(object);
};


export const request: RequestType = (url, { method, headers, data, params = {}, addons = {} }) => new Promise((resolve, reject) => {
  // check required args
  if (url == null) {
    return resolve({ error: 'URL not specified', });
  };

  if (method == null) {
    return resolve({ error: 'Method not specified', });
  };


  // V1 add credentials
  if (url.includes('https://osu.ppy.sh/api/') && !url.includes('https://osu.ppy.sh/api/v2')) {
    params.k = addons.authKey || auth.cache.v1;

    if (params.k == null) {
      return resolve({ error: 'v1 api key not specified', });
    };
  };


  // V2 add credentials
  if (url.includes('https://osu.ppy.sh/api/v2')) {
    if (!headers) headers = {};

    headers.Authorization = `Bearer ${addons.authKey || auth.cache.v2}`;
    if (!headers.Accept) headers.Accept = `application/json`;
    if (!headers['Content-Type']) headers['Content-Type'] = `application/json`;
    headers['x-api-version'] = addons.apiVersion == '' ? null : addons.apiVersion || '20240130';

    if ((addons.authKey || auth.cache.v2) == null) {
      return resolve({ error: 'v2 not authorized' });
    };
  };


  if (addons.legacy_only != null)
    params.legacy_only = params.legacy_only == true ? 1 : 0;


  const generate_query = sanitize_query(params);
  const build_url = url + (generate_query ? `?${generate_query}` : '');

  // console.log({ url: build_url, method, headers, data, generate_query, params }); // debug
  const req = https.request(build_url, { method, headers }, (response) => {
    const { location } = response.headers;

    if (response.headers['x-ratelimit-limit'])
      auth.cache['ratelimit-limit'] = parseInt(response.headers['x-ratelimit-limit'].toString() || '60');
    if (response.headers['x-ratelimit-remaining'])
      auth.cache['ratelimit-remaining'] = parseInt(response.headers['x-ratelimit-remaining'].toString() || '60');


    if (location) {
      request(location, { method, headers, data, params, addons })
        .then(resolve)
        .catch(reject);
      return;
    };

    // console.log(response.statusCode, response.statusMessage, response.headers.accept, {
    //   'ratelimit-limit': auth.cache['ratelimit-limit'],
    //   'ratelimit-remaining': auth.cache['ratelimit-remaining'],
    // }, {
    //   url: build_url, method, headers, data, generate_query, params,
    // }); // debug

    const chunks: any[] = [];

    // handle response events
    response.on('data', (chunk: any) => chunks.push(chunk));
    response.on('end', async () => {
      const data = Buffer.concat(chunks).toString();

      if (/^application\/json/.test(response.headers['content-type'])) {
        try {
          const parse = JSON.parse(data);
          if (parse.authentication === 'basic' && total_retries < 3 && addons.ignoreSessionRefresh != true) {
            total_retries++;


            const refresh = await auth.refresh_token();
            if (refresh == null) {
              return resolve({ error: 'Cannot refresh session, double check your credentials (or report to package author)' });
            };


            const retry_request = await request(url, { method, headers, data, params });
            return resolve(retry_request);
          };


          if ('error' in parse) {
            if (parse.error === null) {
              return resolve({ error: `osu returned empty error, double check your parameters (request)` });
            };


            return resolve({ error: parse.error });
          };


          if (parse.authentication === 'basic') {
            return resolve({ error: 'Unauthorized (double check credentials)' });
          };


          total_retries = 0;
          return resolve(parse);
        } catch (error) {
          return resolve({ error: (error as any).name });
        };
      };


      resolve(data);
    });
  });


  // send error
  req.on('error', (error) => {
    resolve({ error: error.name });
  });

  // timeout
  req.setTimeout(addons.timeout_ms || auth.settings.timeout, () => {
    req.destroy();
    resolve({ error: `Request to ${build_url} time out after ${addons.timeout_ms || auth.settings.timeout}ms` });
  });


  // write body to request, if specified
  if (data) req.write(data);
  req.end();
});


/**
 * Executes an HTTP request
 * @param {string} url The url
 * @param {string} dest The file destination
 * @returns {Promise<any>} The response
 */
export const download = (url: string, dest: string, { _callback, headers = {}, data, params, callback, addons = {} }: {
  _callback: boolean;
  headers?: { [key: string]: string },
  data?: string;
  params?: any;
  addons?: IDefaultParams;
  callback?: Function;
}): Promise<any & IError> => {
  return new Promise((resolve, reject) => {
    const start_time = performance.now();
    if (url.includes('https://osu.ppy.sh/api/v2')) headers['Authorization'] = `Bearer ${params?.v2 || auth.cache.v2}`;

    if (!headers['accept']) headers['accept'] = `application/octet-stream`;


    const generate_query = sanitize_query(params);
    const build_url = url + (generate_query ? `?${generate_query}` : '');

    // console.log({ url: build_url, headers, data }); // debug
    const req = https.request(build_url, { method: 'GET', headers }, response => {
      const { location } = response.headers;
      // console.log(url, response.headers['content-type'], response.headers); // debug too

      if (location) {
        download(location, dest, { _callback, headers, data, params, callback })
          .then(resolve)
          .catch(error => ({ error: error }));
        return;
      };


      if (response.statusCode === 404) {
        return resolve({ error: 'file unavailable' });
      };


      if (response.headers['content-type'] == 'application/json' || (response.headers['content-type'] == null && +(response.headers['content-length'] || 0) < 150)) {
        const chunks: any[] = [];


        response.on('data', (chunk: any) => chunks.push(chunk));
        response.on('end', async () => {
          const data = Buffer.concat(chunks).toString();
          try {
            const json = JSON.parse(data);


            if ('error' in json && json.error == null) {
              return resolve({ error: 'osu returned empty error (download)' });
            };


            return resolve(json);
          } catch (error) {
            return resolve({ error: `Unable to download file: ${data} (${url})` });
          };
        });


        return;
      };


      const file = fs.createWriteStream(dest, { encoding: 'utf8' });

      file.on('error', error => {
        fs.unlinkSync(dest);
        resolve({ error: error.name });
      });

      file.on('finish', () => {
        file.close();

        const finish_time = performance.now();
        resolve({ status: 'finished', destination: dest, elapsed_time: finish_time - start_time });
      });


      if (_callback == true && callback !== undefined) {
        const totalLength = parseInt(response.headers['content-length']);

        let progress = 0;
        let progressBar = 0;

        response.on('data', (chunk) => {
          progress += chunk.length;
          progressBar = 100 * (progress / totalLength);
          callback(progressBar);
        });
      }

      response.pipe(file);
    });


    // send error
    req.on('error', (error) => {
      resolve({ error: error.name });
    });


    // timeout
    req.setTimeout(addons.timeout_ms || auth.settings.timeout, () => {
      req.destroy();
      resolve({ error: `Request to ${build_url} time out after ${addons.timeout_ms || auth.settings.timeout}ms` });
    });

    if (data) {
      req.write(data);
    };
    req.end();
  });
};