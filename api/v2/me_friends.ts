import { credentials } from "../../utility/auth";
import { IDefaultParams, IError } from "../../types";
import { request } from "../../utility/request";
import { MeFriendsResponse } from "../../types/v2/me_friends";
import { handleErrors } from "../../utility/handleErrors";


type Response = MeFriendsResponse[] & IError;


export const me_friends = async (addons?: IDefaultParams): Promise<Response> => {
  if (credentials.type != 'lazer' && credentials.type != 'cli') {
    return handleErrors(new Error('Login via lazer or cli to use this endpoint')) as Response
  };

  if (credentials.type == 'cli' && !credentials.scopes.includes('friends.read')) {
    return handleErrors(new Error(`Requires "friends.read" scope`)) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/friends`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};