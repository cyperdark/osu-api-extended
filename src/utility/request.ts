import * as auth from "../utility/auth";
import https from 'https';
import fs from "fs";

interface RequestParams {
  method?: string;
  headers?: { [key: string]: string };
  data?: string;
  params?: object | [object, ...object[]];
}

export interface RequestNamespace {
  (url: string, params: { method: string, data?: string, headers?: { [key: string]: string }, params?: object }): Promise<any>;
}

const generateQueryString = (obj: any, trail: string = ''): string => {
  const params: string[] = [];

  const processValue = (key: string, value: any) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        params.push(`${key}[]=${encodeURIComponent(item)}`);
      });
    } else if (typeof value === 'object' && value !== null) {
      const newTrail = trail ? `${trail}.${key}` : key;
      params.push(generateQueryString(value, newTrail));
    } else if (typeof value === 'number' && value > 0) {
      params.push(`${key}=${value}`);
    } else if (typeof value === 'string') {
      params.push(`${key}=${encodeURIComponent(value)}`);
    }
  };

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== undefined) {
        processValue(key, value);
      }
    }
  }

  return params.join('&');
};


const TIMEOUT_MS = 60000;
let amount_retry = 0;

/**
 * Executes an HTTP request
 * @param {string} url The url
 * @returns {Promise<any>} The response
 */
export const request = (url: string, { method = "GET", headers, data, params = {} }: RequestParams = {}): Promise<any> => {
  if (url.includes('https://osu.ppy.sh/api/') && !url.includes('https://osu.ppy.sh/api/v2')) {
    // @ts-ignore
    params.k = params.v1 || auth.cache_v1;
  }

  if (url.includes('https://osu.ppy.sh/api/v2'))
    headers = {
      // @ts-ignore
      Authorization: `Bearer ${params.v2 || auth.cache_v2}`,
      Accept: `application/json`,
      'Content-Type': `application/json`,
    };

  console.log({ url, method, headers, data, params: generateQueryString(params) }); // debug too
  return new Promise((resolve, reject) => {
    const req = https.request(url + (generateQueryString(params) ? `?${generateQueryString(params)}` : ''), { method, headers }, (response) => {
      const chunks: any[] = [];

      response.on('data', (chunk: any) => chunks.push(chunk));
      response.on('end', async () => {
        const data = Buffer.concat(chunks).toString();

        if (/^application\/json/.test(response.headers['content-type'])) {
          try {
            const parse = JSON.parse(data);
            if (parse.authentication === 'basic' && auth.cache_v2 && amount_retry < 3) {
              await auth.re_login();

              amount_retry++;

              const again = await request(url, { method, headers, data, params });
              return resolve(again);
            }

            amount_retry = 0;

            return resolve(parse);
          } catch (err) {
            console.log(`JSON Parse on content of type ${response.headers['content-type']} failed.\nError: ${err}\nData: ${data}`);
          }
        }

        resolve(data);
      });
    }).on('error', reject);

    req.setTimeout(TIMEOUT_MS, () => {
      req.destroy();
      reject(new Error(`Request to ${url} time out after ${TIMEOUT_MS}ms`));
    });

    if (data) req.write(data);
    req.end();
  });
};


/**
 * Executes an HTTP request
 * @param {string} url The url
 * @param {string} dest The file destination
 * @returns {Promise<any>} The response
 */
export const download = (url: string, dest: string, { headers = {}, data, params }: RequestParams = {}, callback?: Function): Promise<any> => {
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


    if (url.includes('https://osu.ppy.sh/api/v2')) headers['Authorization'] = `Bearer ${auth.cache_v2}`;

    headers['accept'] = `application/octet-stream`;
    headers['content-Type'] = `application/octet-stream`;


    const req = https.request(url + (params ? '?' + generateQueryString(params) : ''), { method: 'GET', headers }, response => {
      const { location } = response.headers;

      if (location) {
        download(location, dest, { headers, data, params }, callback)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode === 404) {
        resolve({ error: 'file unavailable' });
        return;
      }

      if (callback !== undefined) {
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

/**
 * Makes a namespace 
 * @param {string} url The namespace url
 * @param {{ query?: string }} [params] Options ig
 * @returns {(params: string, { query: string }) => Promise<any>} The function that does the reqs
 */
export const namespace = (url: string, { query }: { query?: { [key: string]: string }, headers?: Record<string, string> } = {}): RequestNamespace => {
  return (path: string, params) => request(url + path, params);
};