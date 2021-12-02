import { RequestParams, RequestNamepsace } from "../types/request";
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
 * @param {string | URL} url The url
 * @returns {Promise<any>} The response
 */
export const request = (url: string | URL, { method = "GET", headers, data, params }: RequestParams = {}): Promise<any> => new Promise((res, rej) => {
  // console.log(url, method, headers, data, params);

  const req = https.request(url + (o(params) ? '?' + o(params) : ''), { method, headers }, r => {
    // console.log(url + (o(params) ? '?' + o(params) : ''));

    // console.log(url + (params ? (Array.isArray(params) && params.length > 0 ? '?' + q([params[0], ...params.slice(1)]) : '?' + q(params)) : ""));

    let data = '';

    // data chunks
    r.on('data', (chunk: any) => data += chunk);

    // Sends response on end of request
    r.on('end', () => {
      // If the format was JSON, parse(with test) and return
      if (/^application\/json/.test(r.headers['content-type']))
        try { return res(JSON.parse(data)) } catch (err) { console.log(`JSON Parse on content of type ${r.headers['content-type']} failed.\nError: ${err}\nData: ${data}`) }

      // Sends raw data as response if no json
      res(data)
    })
  }).on('error', rej);

  // If there is data to be sent, send it
  if (data) req.write(data);

  // Sends the request
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

  // Returns a function that does the reqs
  return (path: string, params) => request(url + path, params)
};