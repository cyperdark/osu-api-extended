import readln from "readline";
import open from "open";


import { types as user_types } from '../types/v2_user_me_details';
import { request } from "../utility/request";
import { osu_mode } from './types';


interface _login {
  access_token: string,
  expires_in: number
}

const credentials = {
  type: 0,
  username: '',
  password: '',
  clientId: 0,
  clientSecret: '',
  redirect_uri: '',
};


export let cache_v1: string = '';
export let cache_v2: string = '';


export const set_v1 = (v: string) => cache_v1 = v;
export const set_v2 = (v: string) => cache_v2 = v;

const isInitial = () => cache_v2 != '';

const save_credentials = (type: number, obj: any) => {
  if (type == 1) {
    credentials.type = 1;
    credentials.username = obj.username;
    credentials.password = obj.password;
  };

  if (type == 2) {
    credentials.type = 2;
    credentials.clientId = obj.clientId;
    credentials.clientSecret = obj.clientSecret;
  };

  if (type == 3) {
    credentials.type = 3;
    credentials.clientId = obj.clientId;
    credentials.clientSecret = obj.clientSecret;
    credentials.redirect_uri = obj.redirect_uri;
  };
};


export const re_login = async () => {
  if (credentials.type == 1) await login_lazer(credentials.username, credentials.password);
  if (credentials.type == 2) await login(credentials.clientId, credentials.clientSecret);
  if (credentials.type == 3) await authorize_cli(credentials.clientId, credentials.clientSecret, credentials.redirect_uri);

  return true;
};


export const login_lazer = async (username: string, password: string): Promise<_login> => {
  if (!isInitial()) save_credentials(1, { username, password });

  const { access_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      username,
      password,
      grant_type: "password",
      client_id: 5,
      client_secret: 'FGc9GAtyHzeQDshWP5Ah7dega8hJACAJpQtw6OXk',
      scope: "*"
    })
  });

  cache_v2 = access_token;

  return { access_token, expires_in };
};


export const login = async (clientId: number, clientSecret: string): Promise<_login> => {
  if (!isInitial()) save_credentials(2, { clientId, clientSecret });

  const { access_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'public',
      code: 'code',
    })
  });

  cache_v2 = access_token;

  return { access_token, expires_in };
};


export const authorize_cli = async (clientId: number, clientSecret: string, redirectUri: string, scope?: string, state?: string): Promise<_login> => {
  if (!isInitial()) save_credentials(3, { clientId, clientSecret, redirect_uri: redirectUri });

  const cl = readln.createInterface(process.stdin, process.stdout);
  const question = (q: string) => new Promise((res, rej) => cl.question(q + ': ', (answer: string) => res(answer)));

  await open(`https://osu.ppy.sh/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=friends.read%20identify%20public`);

  const code = await question('Paste code here');
  const { access_token, expires_in } = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code,
    })
  });

  cache_v2 = access_token;

  return { access_token, expires_in };
};


export const build_url = (clientId: number, redirectUri: string, scope: ['chat.write' | 'delegate' | 'forum.write' | 'friends.read' | 'identify' | 'public'], state?: string): string => {
  const url = new URL('https://osu.ppy.sh/oauth/authorize');
  const params: any = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: scope.join(' '),
    state: state,
  };

  Object.keys(params)
    .forEach(key => url.searchParams.append(key, params[key]));

  return url.href;
};


export const authorize = async (code: string, gamemode: osu_mode, clientId: number, clientSecret: string, redirectUri: string): Promise<any> => {
  const { access_token } = await request('https://osu.ppy.sh/oauth/token', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code,
    })
  });


  const user = await request(`https://osu.ppy.sh/api/v2/me/${gamemode}`, { params: { v2: access_token } });
  return user;
};