import { IDefaultParams, IError } from "../../types";
import { UsersKudosuResponse } from "../../types/v2/users_kudosu";
import { request } from "../../utility/request";


type Response = UsersKudosuResponse[] & IError;


export const users_kudosu = async (params: {
  id: number;
  limit?: number;
  offset?: number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return { error: new Error(`Specify user id`) } as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/kudosu`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });


  return data;
};