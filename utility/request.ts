// PACKAGES
import querystring from 'node:querystring';
import https from 'https';
import fs from "fs";


// CREDENTIALS
import * as auth from "./auth";


// TYPES
export interface RequestType {
  (url: string, params: {
    method: string,
    data?: string,
    headers?: { [key: string]: string },
    params?: { [key: string]: any };
  }): Promise<any>;
};


// VALUES
const TIMEOUT_MS = 60000;
let total_retries = 0;



export const request: RequestType = (url, { method, headers, data, params = {} }): Promise<any> => new Promise((resolve, reject) => {
  // check required args
  if (url == null)
    throw new Error('URL not specified');

  if (method == null)
    throw new Error('Method not specified');


  // V1 add credentials
  if (url.includes('https://osu.ppy.sh/api/') && !url.includes('https://osu.ppy.sh/api/v2'))
    params.k = params.v1 || auth.cache_tokens.v1;

  // V2 add credentials
  if (url.includes('https://osu.ppy.sh/api/v2')) {
    if (!headers) headers = {};

    headers.Authorization = `Bearer ${params.v2 || auth.cache_tokens.v2}`;
    headers.Accept = `application/json`;
    headers['Content-Type'] = `application/json`;
    headers['x-api-version'] = '20220705';
  };


  const generate_query = querystring.encode(params);
  const build_url = url + (generate_query ? `?${generate_query}` : '');

  // console.log({ url: build_url, method, headers, data });
  const req = https.request(build_url, { method, headers }, (response) => {
    const chunks: any[] = [];

    // handle response events
    response.on('data', (chunk: any) => chunks.push(chunk));
    response.on('end', async () => {
      const data = Buffer.concat(chunks).toString();

      if (/^application\/json/.test(response.headers['content-type'])) {
        try {
          const parse = JSON.parse(data);
          if (parse.authentication === 'basic' && total_retries < 3 && params.nor != true) {
            const refresh = await auth.refresh_token();
            if (refresh == null) return resolve({ authentication: 'basic' });
            total_retries++;


            const retry_request = await request(url, { method, headers, data, params });
            return resolve(retry_request);
          };


          total_retries = 0;
          return resolve(parse);
        } catch (error) {
          reject(error);
        };
      };


      resolve(data);
    });
  });


  // throw error
  req.on('error', reject);

  // timeout
  req.setTimeout(TIMEOUT_MS, () => {
    req.destroy();
    reject(new Error(`Request to ${build_url} time out after ${TIMEOUT_MS}ms`));
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
export const download = (url: string, dest: string, { _callback, headers = {}, data, params, callback }: {
  _callback: boolean;
  headers?: { [key: string]: string },
  data?: string;
  params?: any;
  callback?: Function;
}): Promise<any> => {
  return new Promise((resolve, reject) => {

    const file = fs.createWriteStream(dest, { encoding: 'utf8' });

    file.on('error', err => {
      fs.unlinkSync(dest);
      reject(err);
    });

    file.on('finish', () => {
      file.close();
      resolve(dest);
    });


    if (url.includes('https://osu.ppy.sh/api/v2')) headers['Authorization'] = `Bearer ${params?.v2 || auth.cache_tokens.v2}`;

    if (!headers['accept']) headers['accept'] = `application/octet-stream`;
    // if (!headers['content-type']) headers['content-type'] = `application/octet-stream`;


    const generate_query = querystring.encode(params);
    const build_url = url + (generate_query ? `?${generate_query}` : '');

    // console.log({ url: build_url, method, headers, data });
    const req = https.request(build_url, { method: 'GET', headers }, response => {
      const { location } = response.headers;

      if (location) {
        download(location, dest, { _callback, headers, data, params, callback })
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode === 404) {
        resolve({ error: 'file unavailable' });
        return;
      }

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

    req.setTimeout(TIMEOUT_MS, () => {
      req.destroy();
      reject(new Error(`Request to ${url} time out after ${TIMEOUT_MS}ms`));
    });

    if (data) {
      req.write(data);
    }
    req.end();
  });
};


// export const download = (url: string, destination: string, { headers, data, params }: {
//   headers?: { [key: string]: string },
//   data?: string;
//   params?: any
// }) => {
//   if (url.includes('https://osu.ppy.sh/api/v2')) headers['Authorization'] = `Bearer ${params?.v2 || auth.cache_tokens.v2}`;

//   if (!headers['accept']) headers['accept'] = `application/octet-stream`;
//   if (!headers['content-Type']) headers['content-Type'] = `application/octet-stream`;


//   return request(url, { method: 'GET', data, headers, params })
//     .then((response: Buffer) => {
//       if (!(response instanceof Buffer)) {
//         throw new Error('Invalid response format. Expected binary data.');
//       }
//       fs.writeFileSync(destination, response);
//     })
//     .catch((error: Error) => {
//       // Handle errors, such as network issues or failed requests
//       console.error('Error downloading file:', error.message);
//       throw error;
//     });
// };

// export const download = (url: string, destination: string, { headers, data, params }: {
//   headers?: { [key: string]: string },
//   data?: string;
//   params: any
// }) => new Promise((resolve, reject) => {
//   const file = fs.createWriteStream(dest, { encoding: 'utf8' });



//   request(url, { method: 'GET', data, headers, params })
//     .t
// });