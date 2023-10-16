import { execSync } from "child_process";
import readln from "readline";

import { types as user_types } from "../types/v2_user_me_details";
import { osu_mode, auth_scopes } from "./types";
import { request } from "../utility/request";
import { MethodsEnum } from "./types";

interface _login {
  access_token: string;
  expires_in: number;
}

const credentials: {
  type: number;
  username: string;
  password: string;
  clientId: number;
  clientSecret: string;
  redirect_uri: string;
  scope: auth_scopes;
} = {
  type: 0,
  username: "",
  password: "",
  clientId: 0,
  clientSecret: "",
  redirect_uri: "",
  scope: ["public"],
};

export let cache_v1: string = "";
export let cache_v2: string = "";

export const set_v1 = (v: string) => (cache_v1 = v);
export const set_v2 = (v: string) => (cache_v2 = v);

const isInitial = () => cache_v2 != "";

const save_credentials = (type: number, obj: any) => {
  if (type == 1) {
    credentials.type = 1;
    credentials.username = obj.username;
    credentials.password = obj.password;
  }

  if (type == 2) {
    credentials.type = 2;
    credentials.clientId = obj.clientId;
    credentials.clientSecret = obj.clientSecret;
    credentials.scope = obj.scope;
  }

  if (type == 3) {
    credentials.type = 3;
    credentials.clientId = obj.clientId;
    credentials.clientSecret = obj.clientSecret;
    credentials.redirect_uri = obj.redirect_uri;
    credentials.scope = obj.scope;
  }
};

export const re_login = async () => {
  if (credentials.type == 1) await login_lazer(credentials.username, credentials.password);
  if (credentials.type == 2) await login_stable(credentials.clientId, credentials.clientSecret, credentials.scope);
  if (credentials.type == 3) await authorize_cli(credentials.clientId, credentials.clientSecret, credentials.redirect_uri, credentials.scope);

  return true;
};

const login_lazer = async (username: string, password: string): Promise<_login> => {
  checkIfExists([username, password]);
  if (!isInitial()) save_credentials(1, { username, password });

  const { access_token, expires_in } = await makeOAuthRequest({
    username,
    password,
    grant_type: "password",
    client_id: 5,
    client_secret: "FGc9GAtyHzeQDshWP5Ah7dega8hJACAJpQtw6OXk",
    scope: "*",
  });

  cache_v2 = access_token;

  return { access_token, expires_in };
};

const login_stable = async (clientId: number, clientSecret: string, scope: auth_scopes): Promise<_login> => {
  if (!Array.isArray(scope) || !scope) throw new Error("Scope must be an Array");
  checkIfExists([clientId, clientSecret, scope]);

  if (!isInitial()) save_credentials(2, { clientId, clientSecret, scope });

  const { access_token, expires_in } = await makeOAuthRequest({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    scope: scope.join(" "),
    code: "code",
  });

  cache_v2 = access_token;

  return { access_token, expires_in };
};

const authorize_cli = async (clientId: number, clientSecret: string, redirectUri: string, scope: auth_scopes, state?: string): Promise<_login> => {
  checkIfExists([clientId, clientSecret, redirectUri, scope]);

  if (!Array.isArray(scope) || !scope) throw new Error("Scope must be an Array");
  if (!isInitial()) save_credentials(3, { clientId, clientSecret, redirect_uri: redirectUri, scope });

  const cl = readln.createInterface(process.stdin, process.stdout);
  const question = (q: string) => new Promise((res, rej) => cl.question(q + ": ", (answer: string) => res(answer)));

  const url = build_url(clientId, redirectUri, scope, state);
  // await open(url);
  const start = process.platform == "darwin" ? "open" : process.platform == "win32" ? "start" : "xdg-open";
  execSync(start + " " + url.replaceAll("&", "^&"));

  const code = await question("Paste code here");
  const { access_token, expires_in } = await makeOAuthRequest({ grant_type: "authorization_code", client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUri, code });

  cache_v2 = access_token;

  return { access_token, expires_in };
};

const makeOAuthRequest = async (data: object): Promise<{ access_token: string; expires_in: number }> => {
  const url = "https://osu.ppy.sh/oauth/token";
  const response = await request(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  });

  return response;
};

type ParametersType = { method: MethodsEnum; clientId?: number; clientSecret?: string; redirectUri?: string; scope?: auth_scopes; state?: string; username?: string; password?: string };

export async function login({ method, clientId, clientSecret, redirectUri, scope, state, username, password }: ParametersType) {
  switch (method) {
    case MethodsEnum.LAZER:
      return await login_lazer(username, password);
    case MethodsEnum.STABLE:
      return await login_stable(clientId, clientSecret, scope);
    case MethodsEnum.CLI:
      return await authorize_cli(clientId, clientSecret, redirectUri, scope, state);
    default:
      throw new Error("Something went wrong.");
  }
}

const checkIfExists = (any: any[]): void => {
  const exists = any.some((item) => item === undefined || item === null);
  if (!exists) throw new Error("One or more parameters are not set or are undefined!");
};

export const build_url = (clientId: number, redirectUri: string, scope: auth_scopes, state?: string): string => {
  if (!Array.isArray(scope) || !scope) throw new Error("Scope must be an Array");

  const url = new URL("https://osu.ppy.sh/oauth/authorize");
  const params: any = {
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: "code",
    scope: scope.join(" "),
    state: state,
  };

  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  return url.href;
};

export const authorize = async (code: string, gamemode: osu_mode, clientId: number, clientSecret: string, redirectUri: string): Promise<user_types> => {
  const { access_token } = await request("https://osu.ppy.sh/oauth/token", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: JSON.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code,
    }),
  });

  const user = await request(`https://osu.ppy.sh/api/v2/me/${gamemode}`, { params: { v2: access_token } });
  return user;
};
