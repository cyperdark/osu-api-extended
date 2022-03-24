import { RequestParams, RequestNamepsace } from "../types/request";
import * as auth from "../utility/auth";
import https from 'https'
import fs from "fs";

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

  if (url.includes('https://osu.ppy.sh/api/v2')) {  
    await auth.expired();
    headers.Authorization = `Bearer ${auth.cache_token}`;
  };

  // console.log('\n', url, method, headers, data, params, '\n'); // debug too
  const req = https.request(url + (o(params) ? '?' + o(params) : ''), { method, headers }, r => {
    let data = '';

    r.on('data', (chunk: any) => data += chunk);
    r.on('end', () => {
      if (/^application\/json/.test(r.headers['content-type']))
        try { return res(JSON.parse(data)) } catch (err) { console.log(`JSON Parse on content of type ${r.headers['content-type']} failed.\nError: ${err}\nData: ${data}`) }

      res(data)
    })
  }).on('error', rej);

  if (data) req.write(data);
  req.end();
});

/**
 * Executes an HTTP request
 * @param {string | URL} url The url
 * @param {string} dest The file destination
 * @returns {Promise<any>} The response
 */
export const download = (url: string | URL, dest: string, { headers, data, params }: RequestParams = {}): Promise<any> => new Promise((res, rej) => {
  const file = fs.createWriteStream(dest);

  const req = https.get(url + (params ? '?' + o(params) : ''), { method: 'GET', headers }, r => {
    r.pipe(file);

    file.on('finish', () => {
      file.close();
      res(dest);
    });

  }).on('error', (err) => {
    fs.unlinkSync(dest);
    rej(err);
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
  return (path: string, params) => request(url + path, params)
};