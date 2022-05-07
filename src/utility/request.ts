import * as auth from "../utility/auth";
import https from 'https'
import fs from "fs";

interface RequestParams {
  method?: string,
  headers?: { [key: string]: string },
  data?: string,
  params?: object | [object, ...object[]] // any | [any, ...any]
};

export interface RequestNamepsace {
  (url: string, params: { method: string, data?: string, headers?: { [key: string]: string }, params?: object }): Promise<any>
};

const o = (obj: any) => {
  let params = '';

  for (const i in obj) {
    if (obj[i] == undefined) continue;

    if (typeof obj[i] == 'object') obj[i].filter((d: any) => params += `${i}[]=${d}&`);
    else if (typeof obj[i] == 'number' && obj[i] > 0) params += `${i}=${obj[i]}&`;
    else if (typeof obj[i] == 'string') params += `${i}=${obj[i]}&`;
  };

  return params.slice(0, params.length - 1);
};

/**
 * Executes an HTTP request
 * @param {string} url The url
 * @returns {Promise<any>} The response
 */
export const request = (url: string, { method = "GET", headers, data, params }: RequestParams = {}): Promise<any> => new Promise(async (res, rej) => {
  if (url.includes('https://osu.ppy.sh/api/') && !url.includes('https://osu.ppy.sh/api/v2')) {
    if (!params) params = {};
    params.k = auth.cache_v1;
  };

  if (url.includes('https://osu.ppy.sh/api/v2')) headers = {
    Authorization: `Bearer ${auth.cache_v2}`,
    Accept: `application/json`,
    'Content-Type': `application/json`,
  };

  console.log('\n', url, method, headers, data, o(params), '\n'); // debug too
  const req = https.request(url + (o(params) ? '?' + o(params) : ''), { method, headers }, r => {
    let data: any = '';
    // console.log('headers', r.headers);

    r.on('data', (chunk: any) => data += chunk);
    r.on('end', async () => {
      if (/^application\/json/.test(r.headers['content-type']))
        try {
          const parse = JSON.parse(data);
          if (parse.authentication == 'basic' && auth.cache_v2) {
            await auth.re_login();

            const again = await request(url, { method, headers, data, params });

            return res(again);
          };

          return res(parse)
        } catch (err) { console.log(`JSON Parse on content of type ${r.headers['content-type']} failed.\nError: ${err}\nData: ${data}`) }


      res(data)
    })
  }).on('error', rej);

  if (data) req.write(data);
  req.end();
});

/**
 * Executes an HTTP request
 * @param {string} url The url
 * @param {string} dest The file destination
 * @returns {Promise<any>} The response
 */
export const download = (url: string, dest: string, { headers, data, params }: RequestParams = {}): Promise<any> => new Promise(async (res, rej) => {
  const file = fs.createWriteStream(dest);

  file.on('error', err => {
    fs.unlinkSync(dest);
    rej(err);
  });

  file.on('finish', () => {
    file.close();
    res(dest);
  });

  if (url.includes('https://osu.ppy.sh/api/v2')) headers = {
    Authorization: `Bearer ${auth.cache_v2}`,
    Accept: `application/octet-stream`,
    'Content-Type': `application/octet-stream`,
  };

  // console.log('\n', url, headers, data, o(params), '\n'); // debug too
  const req = https.request(url + (params ? '?' + o(params) : ''), { method: 'GET', headers }, response => {
    const { location } = response.headers;

    if (location) {
      const redirect = download(location, dest);
      return res(redirect);
    }

    response.pipe(file);
  });

  if (data) req.write(data)
  req.end();
});

/**
 * Makes a namespace 
 * @param {string} url The namespace url
 * @param {{ query?: string }} [params] Options ig
 * @returns {(params: string, { query: string }) => Promise<any>} The function that does the reqs
 */
export const namespace = (url: string, { query }: { query?: { [key: string]: string }, headers?: Record<string, string> } = {}): RequestNamepsace => {
  return (path: string, params) => request(url + path, params);
};