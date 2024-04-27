import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { UsersLisResponse } from "../../types/v2/users_list";


type Response = UsersLisResponse[] & IError;


export const users_list = async (ids: number[], addons?: IDefaultParams): Promise<Response> => {
  if ((ids || [])?.length == 0) {
    return { error: new Error(`Specify at least one user id`) } as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users`, {
    method: 'GET',
    params: {
      'ids[]': ids
    },
    addons
  });


  if (data.users) return data.users;
  return data;
};