import { execSync } from 'child_process';
import { request } from "./request";
import readln from "readline";


import { auth_params, auth_response, auth_scopes, Modes_names } from '../types/index';
import { UserAuth } from '../types/user_details';


export const settings = {
  timeout: 60000,
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

  scopes: ['public'],
};

export const cache = {
  v1: '',
  v2: '',

  'ratelimit-remaining': 0,
  'ratelimit-limit': 0,
};



export const login = async (params: auth_params) => {
  credentials.method = params.method;


  if (params.method == 'v1') {
    credentials.api_key = params.api_key;

    cache.v1 = params.api_key;
    return cache.v1;
  };


  if (params.method == 'v2') {
    credentials.client_id = params.client_id;
    credentials.client_secret = params.client_secret;
    if (params.scopes) credentials.scopes = params.scopes;

    const authorize = await client_login(params.client_id, params.client_secret, params.scopes || ['public']);
    return authorize;
  };


  if (params.method == 'lazer') {
    credentials.login = params.login;
    credentials.password = params.password;

    const authorize = await lazer_login(params.login, params.password);
    return authorize;
  };


  if (params.method == 'cli') {
    credentials.client_id = params.client_id;
    credentials.client_secret = params.client_secret;
    if (params.scopes) credentials.scopes = params.scopes;

    credentials.redirect_url = params.redirect_url;
    credentials.state = params.state;

    const authorize = await authorize_cli(params.client_id, params.client_secret, params.redirect_url, params.scopes || ['public'], params.state);
    return authorize;
  };


  return null;
};


export const set_v2 = (token: string) => cache.v2 = token;

export const refresh_token = async () => {
  const refresh = await login(credentials);
  return refresh;
};



const client_login = async (client_id: number | string, client_secret: string, scopes: auth_scopes): Promise<auth_response> => {
  const { access_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
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


  cache.v2 = access_token;
  return { access_token, expires_in };
};


const lazer_login = async (login: string, password: string) => {
  const { access_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
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


  cache.v2 = access_token;
  return { access_token, expires_in };
};


const authorize_cli = async (client_id: number | string, client_secret: string, redirect_uri: string, scopes: auth_scopes, state?: string): Promise<auth_response> => {
  const cl = readln.createInterface(process.stdin, process.stdout);
  const question = (q: string) => new Promise((res, rej) => cl.question(q + ': ', (answer: string) => res(answer)));


  const url = build_url({ client_id, redirect_uri, scopes, state });
  const start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
  execSync(start + ' ' + url.replace(/&/g, '^&'));


  const code = await question('Paste code here');
  const { access_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
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


  cache.v2 = access_token;
  return { access_token, expires_in };
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
  const { access_token, refresh_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
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


  const user = await request(`https://osu.ppy.sh/api/v2/me/${mode}`, {
    method: 'GET',
    addons: { authKey: access_token, ignoreSessionRefresh: true }
  });
  user.access_token = access_token;
  user.refresh_token = refresh_token;
  user.expires_in = expires_in;

  return user;
};


export const refresh_session = async ({ refresh_token, mode, client_id, client_secret, redirect_url }: {
  refresh_token: string;
  mode: Modes_names;

  client_id: number | string;
  client_secret: string;

  redirect_url: string;
}): Promise<UserAuth> => {
  const { access_token, refresh_token: refresh_token_new, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
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


  const user = await request(`https://osu.ppy.sh/api/v2/me/${mode}`, {
    method: 'GET',
    addons: { authKey: access_token, ignoreSessionRefresh: true }
  });
  user.access_token = access_token;
  user.refresh_token = refresh_token_new;
  user.expires_in = expires_in;

  return user;
};