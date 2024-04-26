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
  }): Promise<any | IError>;
};


// VALUES
let total_retries = 0;



export const request: RequestType = (url, { method, headers, data, params = {}, addons = {} }) => new Promise((resolve, reject) => {
  // check required args
  if (url == null) {
    return resolve({ error: new Error('URL not specified'), });
  };

  if (method == null) {
    return resolve({ error: new Error('Method not specified'), });
  };


  // V1 add credentials
  if (url.includes('https://osu.ppy.sh/api/') && !url.includes('https://osu.ppy.sh/api/v2'))
    params.k = addons.authKey || auth.cache.v1;

  // V2 add credentials
  if (url.includes('https://osu.ppy.sh/api/v2')) {
    if (!headers) headers = {};

    headers.Authorization = `Bearer ${addons.authKey || auth.cache.v2}`;
    if (!headers.Accept) headers.Accept = `application/json`;
    if (!headers['Content-Type']) headers['Content-Type'] = `application/json`;
    headers['x-api-version'] = addons.apiVersion == '' ? null : addons.apiVersion || '20240130';
  };


  if (addons.legacy_only != null)
    params.legacy_only = params.legacy_only == true ? 1 : 0;


  const generate_query = querystring.encode(params);
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
              return resolve({ error: new Error(`osu returned empty error, double check your parameters`) });
            };


            return resolve({ error: new Error(parse.error) });
          };


          if (parse.authentication === 'basic') {
            return resolve({ error: new Error('Unauthorized (double check credentials)') });
          };


          total_retries = 0;
          return resolve(parse);
        } catch (error) {
          return resolve({ error: error });
        };
      };


      resolve(data);
    });
  });


  // send error
  req.on('error', (error) => {
    resolve({ error: error });
  });

  // timeout
  req.setTimeout(addons.timeout_ms || auth.settings.timeout, () => {
    req.destroy();
    resolve({ error: new Error(`Request to ${build_url} time out after ${addons.timeout_ms || auth.settings.timeout}ms`) });
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
}): Promise<any | IError> => {
  return new Promise((resolve, reject) => {
    if (url.includes('https://osu.ppy.sh/api/v2')) headers['Authorization'] = `Bearer ${params?.v2 || auth.cache.v2}`;

    if (!headers['accept']) headers['accept'] = `application/octet-stream`;


    const generate_query = querystring.encode(params);
    const build_url = url + (generate_query ? `?${generate_query}` : '');

    // console.log({ url: build_url, method, headers, data });
    const req = https.request(build_url, { method: 'GET', headers }, response => {
      const { location } = response.headers;

      if (location) {
        download(location, dest, { _callback, headers, data, params, callback })
          .then(resolve)
          .catch(error => ({ error: error }));
        return;
      };


      const file = fs.createWriteStream(dest, { encoding: 'utf8' });

      file.on('error', error => {
        fs.unlinkSync(dest);
        resolve({ error: error });
      });

      file.on('finish', () => {
        file.close();
        resolve(dest);
      });


      if (response.statusCode === 404) {
        resolve({ error: new Error('file unavailable') });
        return;
      };


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

    req.setTimeout(addons.timeout_ms || auth.settings.timeout, () => {
      req.destroy();
      resolve({ error: new Error(`Request to ${build_url} time out after ${addons.timeout_ms || auth.settings.timeout}ms`) });
    });

    if (data) {
      req.write(data);
    };
    req.end();
  });
};