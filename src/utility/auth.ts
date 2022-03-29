import { request } from "../utility/request";
import readln from "readline";
import open from "open";

interface _login {
  access_token: string,
  expires_in: number
}

export let cache_token: string = '';
export let expire: number = 0;

const credentials = {
  type: 0,
  username: '',
  password: '',
  clientId: 0,
  clientSecret: '',
  redirect_uri: '',
};

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

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

export const isLogin = async () => {
  const xpire = await expired();

  if (cache_token != '' && xpire) return true;
  return false;
};

const isInitial = () => cache_token != '' ? true : false;

export const set_expire = (v: number) => expire = v;
export const set_token = (v: string) => cache_token = v;

export const expired = async (): Promise<boolean> => {
  const date = new Date();
  const date2 = new Date(expire * 1000);
  const unix = Math.floor(date.getTime() / 1000);

  // console.log(10000, 'expired', credentials.type, (expire > 0 && unix < expire), unix, expire, date.toISOString().slice(0, 10), date2.toISOString().slice(0, 10)); // debug thing

  if ((expire > 0 && unix < expire)) return true;

  await sleep(1000);
  await re_login();
  return false;
}

const re_login = async () => {
  if (credentials.type == 1) await login_lazer(credentials.username, credentials.password);
  if (credentials.type == 2) await login(credentials.clientId, credentials.clientSecret);
  if (credentials.type == 3) await authorize(credentials.clientId, credentials.clientSecret, credentials.redirect_uri);

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

  const date = new Date();

  cache_token = access_token;
  set_expire(Math.floor(date.getTime() / 1000) + expires_in);

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

  const date = new Date();

  cache_token = access_token;
  set_expire(Math.floor(date.getTime() / 1000) + expires_in);

  return { access_token, expires_in };
};

export const authorize = async (clientId: number, clientSecret: string, redirect_uri: string, scope?: string, state?: string): Promise<_login> => {
  if (!isInitial()) save_credentials(3, { clientId, clientSecret, redirect_uri });

  const cl = readln.createInterface(process.stdin, process.stdout);
  const question = (q: string) => new Promise((res, rej) => cl.question(q + ': ', (answer: string) => res(answer)));

  await open(`https://osu.ppy.sh/oauth/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=code&scope=friends.read%20identify%20public`);

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
      redirect_uri,
      code,
    })
  });

  const date = new Date();

  cache_token = access_token;
  set_expire(Math.floor(date.getTime() / 1000) + expires_in);

  return { access_token, expires_in };
};