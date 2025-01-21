import { execSync } from 'child_process';
import { request } from "./request";
import readln from "readline";
import path from "path";
import fs from "fs";


import { auth_params, auth_response, auth_scopes, IError, lazer_auth_response, Modes_names } from '../types/index';
import { UserAuth } from '../types/v2/users_details';
import { handleErrors } from './handleErrors';


export const settings = {
  timeout: 60000,
  throwErrors: true,
};


export const credentials: {
  type: any;

  api_key: string;

  client_id: number | string;
  client_secret: string;

  login: string;
  password: string;

  redirect_url: string;
  state: string;

  cached_token_path: string;

  scopes: auth_scopes;
} = {
  type: '' as any,

  api_key: '',

  client_id: '',
  client_secret: '',

  login: '',
  password: '',

  redirect_url: '',
  state: '',

  cached_token_path: '',

  scopes: ['public'],
};

export const cache = {
  v1: '',
  v2: '',

  'ratelimit-remaining': 1200,
  'ratelimit-limit': 1200,
};


type ResponseLogin<T extends auth_params['type']> =
  T extends 'v2'
  ? Promise<auth_response & IError>
  : T extends 'v1'
  ? string
  : T extends 'lazer'
  ? Promise<lazer_auth_response & IError>
  : T extends 'cli'
  ? Promise<auth_response & IError>
  : null;


export function login<T extends auth_params>(params: auth_params): ResponseLogin<T['type']> {
  if (params?.type == null) {
    return handleErrors(new Error('Specify login type'));
  };

  credentials.type = params.type;

  if (params.cached_token_path || params.cachedTokenPath) credentials.cached_token_path = params.cached_token_path || params.cachedTokenPath;
  if (params.timeout) settings.timeout = params.timeout;


  if (params.type == 'v1') {
    credentials.api_key = params.api_key;

    cache.v1 = params.api_key;
    return cache.v1 as ResponseLogin<T['type']>;
  };


  if (params.type == 'v2') {
    credentials.client_id = params.client_id;
    credentials.client_secret = params.client_secret;
    if (params.scopes) credentials.scopes = params.scopes;

    return client_login(params.client_id, params.client_secret, params.scopes || ['public']) as ResponseLogin<T['type']>;
  };


  if (params.type == 'lazer') {
    credentials.login = params.login;
    credentials.password = params.password;

    return lazer_login(params.login, params.password) as ResponseLogin<T['type']>;
  };


  if (params.type == 'cli') {
    credentials.client_id = params.client_id;
    credentials.client_secret = params.client_secret;
    if (params.scopes) credentials.scopes = params.scopes;

    credentials.redirect_url = params.redirect_url;
    credentials.state = params.state;

    return authorize_cli(params.client_id, params.client_secret, params.redirect_url, params.scopes || ['public'], params.state) as ResponseLogin<T['type']>;
  };


  return null;
};


export function set_v2(token: string) {
  return cache.v2 = token;
};


export async function refresh_token() {
  if (credentials.type == 'v1') return;


  const refresh = await login(credentials);
  return refresh;
};


function read_token(): 'refresh' | any | Error {
  try {
    const auth_data: auth_response = JSON.parse(fs.readFileSync(credentials.cached_token_path, 'utf8'));
    if (auth_data?.created_at != null && Date.now() > auth_data.created_at + (auth_data.expires_in * 1000)) {
      return 'refresh';
    };


    if (Array.isArray(auth_data.scopes)) credentials.scopes = auth_data.scopes;
    set_v2(auth_data.access_token);

    return auth_data;
  } catch (error) {
    return error as Error;
  };
};


function save_token(response: auth_response) {
  if (!credentials.cached_token_path) return;

  const { dir } = path.parse(credentials.cached_token_path);
  if (fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  response.scopes = credentials.scopes;
  response.created_at = Date.now();

  cache.v2 = response.access_token;

  fs.writeFileSync(credentials.cached_token_path, JSON.stringify(response), 'utf8');
};



async function client_login(client_id: number | string, client_secret: string, scopes: auth_scopes): Promise<auth_response | Error> {
  if (cache.v2 == '' && credentials.cached_token_path != '' && fs.existsSync(credentials.cached_token_path)) {
    const token = read_token();
    if (token != 'refresh') return read_token();
  };


  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials&scope=${scopes.join(' ')}`,
  });


  if (response.error) return handleErrors(new Error(response.error));
  save_token(response);


  return response;
};


async function lazer_login(login: string, password: string): Promise<lazer_auth_response | Error> {
  if (cache.v2 == '' && credentials.cached_token_path != '' && fs.existsSync(credentials.cached_token_path)) {
    const token = read_token();
    if (token != 'refresh') return read_token();
  };


  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `username=${login}&password=${password}&grant_type=password&client_id=5&client_secret=FGc9GAtyHzeQDshWP5Ah7dega8hJACAJpQtw6OXk&scope=*`,
  });


  if (response.error) return handleErrors(new Error(response.error));
  save_token(response);


  return response;
};


async function authorize_cli(client_id: number | string, client_secret: string, redirect_url: string, scopes: auth_scopes, state?: string): Promise<auth_response | Error> {
  if (cache.v2 == '' && credentials.cached_token_path != '' && fs.existsSync(credentials.cached_token_path)) {
    const token = read_token();
    if (token != 'refresh') return read_token();
  };


  const cl = readln.createInterface(process.stdin, process.stdout);
  const question = (q: string) => new Promise((res, rej) => cl.question(q + ': ', (answer: string) => res(answer)));


  const url = build_url({ client_id, redirect_url, scopes, state });
  const start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
  execSync(start + ' ' + url.replace(/&/g, '^&'));


  const code = await question('Paste code here');
  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=authorization_code&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_url}&code=${code}`,
  });


  if (response.error) return handleErrors(new Error(response.error));
  save_token(response);


  return response;
};


export function build_url({ client_id, redirect_url, scopes, state }: {
  client_id: number | string;
  redirect_url: string;
  scopes: auth_scopes;
  state?: string;
}): string {
  const url = new URL('https://osu.ppy.sh/oauth/authorize');
  const params: any = {
    client_id: client_id,
    redirect_uri: redirect_url,
    response_type: 'code',
    scope: scopes.join(' '),
  };
  if (state) params.state = state;


  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url.href;
};


export async function authorize(params: {
  code: string;
  mode?: Modes_names;

  client_id: number | string;
  client_secret: string;

  redirect_url: string;
}): Promise<UserAuth> {
  if (params?.client_id == null) {
    return handleErrors(new Error(`Specify client_id`));
  };

  if (params?.client_secret == null) {
    return handleErrors(new Error(`Specify client_secret`));
  };

  if (params?.redirect_url == null) {
    return handleErrors(new Error(`Specify redirect_url`));
  };

  if (params?.code == null) {
    return handleErrors(new Error(`Specify code`));
  };


  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=authorization_code&client_id=${params.client_id}&client_secret=${params.client_secret}&redirect_uri=${params.redirect_url}&code=${params.code}`,
  });

  if (response.error) return handleErrors(new Error(response.error));


  let url = 'https://osu.ppy.sh/api/v2/me';
  if (params?.mode) url += `/${params.mode}`;

  const user = await request(url, {
    method: 'GET',
    addons: { authKey: response.access_token, ignoreSessionRefresh: true }
  });

  if (user.error) return handleErrors(new Error(user.error));


  user.access_token = response.access_token;
  user.refresh_token = response.refresh_token;
  user.expires_in = response.expires_in;

  return user;
};


export async function refresh_session(params: {
  client_id: number | string;
  client_secret: string;

  mode?: Modes_names;
  refresh_token: string;
  scopes?: auth_scopes;
}): Promise<UserAuth> {
  if (params?.client_id == null) {
    return handleErrors(new Error(`Specify client_id`));
  };

  if (params?.client_secret == null) {
    return handleErrors(new Error(`Specify client_secret`));
  };


  const scopes = params.scopes || ['public'];
  if (params?.refresh_token == null) {
    return handleErrors(new Error(`Specify refresh_token`));
  };


  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=refresh_token&client_id=${params.client_id}&client_secret=${params.client_secret}&refresh_token=${params?.refresh_token}&scope=${scopes.join(' ')}`
  });

  if (response.error) return handleErrors(new Error(response.error));


  let url = 'https://osu.ppy.sh/api/v2/me';
  if (params?.mode) url += `/${params.mode}`;

  const user = await request(url, {
    method: 'GET',
    addons: { authKey: response.access_token, ignoreSessionRefresh: true }
  });

  if (user.error) return handleErrors(new Error(user.error));


  user.access_token = response.access_token;
  user.refresh_token = response.refresh_token_new;
  user.expires_in = response.expires_in;

  return user;
};