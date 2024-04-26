import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { UsersLisResponse } from "../../types/v2/users_list";



export const users_list = async (ids: number[], addons?: IDefaultParams): Promise<UsersLisResponse[] | IError> => {
  if ((ids || [])?.length == 0) {
    return { error: new Error(`Specify at least one user id`) };
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