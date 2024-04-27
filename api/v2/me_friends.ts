import { credentials } from "../../utility/auth";
import { IDefaultParams, IError } from "../../types";
import { request } from "../../utility/request";
import { MeFriendsResponse } from "../../types/v2/me_friends";


type Response = MeFriendsResponse[] & IError;


export const me_friends = async (addons?: IDefaultParams): Promise<Response> => {
  if (credentials.method != 'lazer') {
    return { error: new Error(`Login via lazer to use this endpoint`) } as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/friends`, {
    method: 'GET',
    addons,
  });


  return data;
};