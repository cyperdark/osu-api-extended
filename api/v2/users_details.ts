import { IDefaultParams, IError, Modes_names } from "../../types";
import { UsersDetailsResponse } from "../../types/v2/users_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = UsersDetailsResponse & IError;


export const users_details = async (params: {
  id: number;
  mode?: Modes_names;
  key?: 'id' | 'username';
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return handleErrors(`Specify user id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}${params.mode ? `/${params.mode}` : ''}`, {
    method: 'GET',
    params: { key: params.key },
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};