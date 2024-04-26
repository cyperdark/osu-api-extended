import { IDefaultParams, IError, Modes_names } from "../../types";
import { UsersDetailsResponse } from "../../types/v2/users_details";
import { request } from "../../utility/request";



export const users_details = async (params: {
  id: number;
  mode?: Modes_names;
  key?: 'id' | 'username';
}, addons?: IDefaultParams): Promise<UsersDetailsResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify user id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}${params.mode ? `/${params.mode}` : ''}`, {
    method: 'GET',
    params: { key: params.key },
    addons,
  });


  return data;
};