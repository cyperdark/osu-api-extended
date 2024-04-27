import { execSync } from 'child_process';
import { request } from "./request";
import readln from "readline";
import path from "path";
import fs from "fs";


import { auth_params, auth_response, auth_scopes, lazer_auth_response, Modes_names } from '../types/index';
import { UserAuth } from '../types/v2/users_details';
import { handleErrors } from './handleErrors';


export const settings = {
  timeout: 60000,
  throwErrors: true,
};


export const credentials: {
  method: any;

  api_key: string;

  client_id: number | string;
  client_secret: string;

  login: string;
  password: string;

  redirect_url: string;
  state: string;

  tokenPath: string;

  scopes: auth_scopes;
} = {
  method: '' as any,

  api_key: '',

  client_id: '',
  client_secret: '',

  login: '',
  password: '',

  redirect_url: '',
  state: '',

  tokenPath: '',

  scopes: ['public'],
};

export const cache = {
  v1: '',
  v2: '',

  'ratelimit-remaining': 0,
  'ratelimit-limit': 0,
};



export const login = (params: auth_params) => {
  credentials.method = params.method;

  if (params.tokenPath) credentials.tokenPath = params.tokenPath;
  if (params.timeout) settings.timeout = params.timeout;


  if (params.method == 'v1') {
    credentials.api_key = params.api_key;

    cache.v1 = params.api_key;
    return cache.v1;
  };


  if (params.method == 'v2') {
    credentials.client_id = params.client_id;
    credentials.client_secret = params.client_secret;
    if (params.scopes) credentials.scopes = params.scopes;

    return client_login(params.client_id, params.client_secret, params.scopes || ['public']);
  };


  if (params.method == 'lazer') {
    credentials.login = params.login;
    credentials.password = params.password;

    return lazer_login(params.login, params.password);
  };


  if (params.method == 'cli') {
    credentials.client_id = params.client_id;
    credentials.client_secret = params.client_secret;
    if (params.scopes) credentials.scopes = params.scopes;

    credentials.redirect_url = params.redirect_url;
    credentials.state = params.state;

    return authorize_cli(params.client_id, params.client_secret, params.redirect_url, params.scopes || ['public'], params.state);
  };


  return null;
};


export const set_v2 = (token: string) => cache.v2 = token;

export const refresh_token = async () => {
  const refresh = await login(credentials);
  return refresh;
};


const token_exists = () => {
  if (!fs.existsSync(credentials.tokenPath)) return false;

  try {
    const authData: auth_response = JSON.parse(fs.readFileSync(credentials.tokenPath, 'utf8'));
    set_v2(authData.access_token);

    return true;
  } catch (error) {
    return false;
  };
};


const save_token = (response: auth_response) => {
  const { dir } = path.parse(credentials.tokenPath);
  if (fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(credentials.tokenPath, JSON.stringify(response), 'utf8');
};



const client_login = async (client_id: number | string, client_secret: string, scopes: auth_scopes): Promise<auth_response> => {
  if (cache.v2 == '' && credentials.tokenPath != '') {
    const is = token_exists();
    if (is) return;
  };


  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: client_id,
      client_secret: client_secret,
      scope: scopes.join(' '),
      code: 'code',
    })
  });

  if (response.error) return handleErrors(response.error);


  cache.v2 = response.access_token;
  save_token(response);


  return response;
};


const lazer_login = async (login: string, password: string): Promise<lazer_auth_response> => {
  if (cache.v2 == '' && credentials.tokenPath != '') {
    const is = token_exists();
    if (is) return;
  };


  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username: login,
      password: password,
      grant_type: "password",
      client_id: 5,
      client_secret: 'FGc9GAtyHzeQDshWP5Ah7dega8hJACAJpQtw6OXk',
      scope: "*"
    })
  });

  if (response.error) return handleErrors(response.error);


  cache.v2 = response.access_token;
  save_token(response);


  return response;
};


const authorize_cli = async (client_id: number | string, client_secret: string, redirect_uri: string, scopes: auth_scopes, state?: string): Promise<auth_response> => {
  const cl = readln.createInterface(process.stdin, process.stdout);
  const question = (q: string) => new Promise((res, rej) => cl.question(q + ': ', (answer: string) => res(answer)));


  const url = build_url({ client_id, redirect_uri, scopes, state });
  const start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
  execSync(start + ' ' + url.replace(/&/g, '^&'));


  const code = await question('Paste code here');
  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: redirect_uri,
      code,
    })
  });

  if (response.error) return handleErrors(response.error);


  cache.v2 = response.access_token;
  return response;
};


export const build_url = ({ client_id, redirect_uri, scopes, state }: {
  client_id: number | string,
  redirect_uri: string,
  scopes: auth_scopes,
  state?: string
}): string => {
  const url = new URL('https://osu.ppy.sh/oauth/authorize');
  const params: any = {
    client_id: client_id,
    redirect_uri: redirect_uri,
    response_type: 'code',
    scope: scopes.join(' '),
  };
  if (state) params.state = state;


  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url.href;
};


export const authorize = async ({ code, mode, client_id, client_secret, redirect_url }: {
  code: string;
  mode: Modes_names;

  client_id: number | string;
  client_secret: string;

  redirect_url: string;
}): Promise<UserAuth> => {
  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: redirect_url,
      code,
    })
  });

  if (response.error) return handleErrors(response.error);


  const user = await request(`https://osu.ppy.sh/api/v2/me/${mode}`, {
    method: 'GET',
    addons: { authKey: response.access_token, ignoreSessionRefresh: true }
  });

  if (user.error) return handleErrors(user.error);


  user.access_token = response.access_token;
  user.refresh_token = response.refresh_token;
  user.expires_in = response.expires_in;

  return user;
};


export const refresh_session = async ({ refresh_token, mode, client_id, client_secret, redirect_url }: {
  refresh_token: string;
  mode: Modes_names;

  client_id: number | string;
  client_secret: string;

  redirect_url: string;
}): Promise<UserAuth> => {
  const response = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'refresh_token',
      client_id: client_id,
      client_secret: client_secret,
      redirect_uri: redirect_url,
      refresh_token,
    })
  });

  if (response.error) return handleErrors(response.error);


  const user = await request(`https://osu.ppy.sh/api/v2/me/${mode}`, {
    method: 'GET',
    addons: { authKey: response.access_token, ignoreSessionRefresh: true }
  });

  if (user.error) return handleErrors(user.error);


  user.access_token = response.access_token;
  user.refresh_token = response.refresh_token_new;
  user.expires_in = response.expires_in;

  return user;
};