import { credentials } from "../../utility/auth";
import { IDefaultParams, IError } from "../../types";
import { request } from "../../utility/request";
import { MeFriendsResponse } from "../../types/v2/me_friends";



export const me_friends = async (addons?: IDefaultParams): Promise<MeFriendsResponse | IError> => {
  if (credentials.method != 'lazer') {
    return { error: new Error(`Login via lazer to use this endpoint`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/friends`, {
    method: 'GET',
    addons,
  });


  return data;
};