// PACKAGES
// import { execSync } from 'child_process';
// import readln from "readline";


// IMPORTS
import { request } from "./request";
// import { gamemode_names } from './types';


export type auth_scopes = [
  'chat.read' |
  'chat.write' |
  'chat.write_manage' |
  'delegate' |
  'forum.write' |
  'friends.read' |
  'identify' |
  'public'
];

export type auth_login = {
  access_token: string,
  expires_in: number
}

const credentials: {
  type: number,
  username: string,
  password: string,
  clientId: number,
  clientSecret: string,
  redirect_uri: string,
  scope: auth_scopes,
} = {
  type: 0,
  username: '',
  password: '',
  clientId: 0,
  clientSecret: '',
  redirect_uri: '',
  scope: ['public'],
};


export let cache_v1: string = '';
export let cache_v2: string = '';


export const set_v1 = (v: string) => cache_v1 = v;
export const set_v2 = (v: string) => cache_v2 = v;

const isInitial = () => cache_v2 != '';

const store_credentials = (type: number, obj: any) => {
  if (type == 1) {
    credentials.type = 1;
    credentials.username = obj.username;
    credentials.password = obj.password;
  };

  if (type == 2) {
    credentials.type = 2;
    credentials.clientId = obj.clientId;
    credentials.clientSecret = obj.clientSecret;
    credentials.scope = obj.scope;
  };

  if (type == 3) {
    credentials.type = 3;
    credentials.clientId = obj.clientId;
    credentials.clientSecret = obj.clientSecret;
    credentials.redirect_uri = obj.redirect_uri;
    credentials.scope = obj.scope;
  };
};


export const update_cache_token = async () => {
  // if (credentials.type == 1) await lazer_user(credentials.username, credentials.password);
  if (credentials.type == 2) await client_login(credentials.clientId, credentials.clientSecret, credentials.scope);
  // if (credentials.type == 3) await cli(credentials.clientId, credentials.clientSecret, credentials.redirect_uri, credentials.scope);

  return true;
};

/**
 * # Authorization via osu client
 * - clientId - osu Client ID
 * - clientSecret - osu Client Secret
 * - _**(optional)**_ scopes - list of scopes
 *   - chat.read - Allows read chat messages on a user's behalf.
 *   - chat.write - Allows sending chat messages on a user's behalf.
 *   - chat.write_manage - Allows joining and leaving chat channels on a user's behalf.
 *   - delegate - Allows acting as the owner of a client; only available for Client Credentials Grant.
 *   - forum.write - Allows creating and editing forum posts on a user's behalf.
 *   - friends.read - Allows reading of the user's friend list.
 *   - identify - Allows reading of the public profile of the user (/me).
 *   - public - Allows reading of publicly available data on behalf of the user.
 */
export const client_login = async (clientId: number, clientSecret: string, scopes?: auth_scopes): Promise<auth_login> => {
  if (scopes == null)
    throw new Error('Specify scopes');

  if (scopes != null && !Array.isArray(scopes))
    throw new Error('Scopes must be an Array');


  // add public scopes
  if (scopes == null)
    scopes = ['public'];


  if (!isInitial()) store_credentials(2, { clientId, clientSecret, scopes });

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
      scope: scopes.join(' '),
      code: 'code',
    })
  });


  cache_v2 = access_token;
  return { access_token, expires_in };
};