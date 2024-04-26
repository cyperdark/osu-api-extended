import { IDefaultParams, IError } from "../../types";
import { UsersActivityResponse } from "../../types/v2/users_activity";
import { request } from "../../utility/request";



export const users_activity = async (params: {
  id: number;
  limit?: number;
  offset?: number;
}, addons?: IDefaultParams): Promise<UsersActivityResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify activity id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/recent_activity`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });


  return data;
};