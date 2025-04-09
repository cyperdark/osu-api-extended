import { IDefaultParams, IError, Modes_names } from "../../types";
import { UsersDetailsResponse } from "../../types/v2/users_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = UsersDetailsResponse & IError;


export const users_details = async (params: {
  user?: number | string;
  mode?: Modes_names;
  key?: 'id' | 'username' | '@';
}, addons?: IDefaultParams): Promise<Response> => {
  if (params?.user == null) {
    return handleErrors(new Error('Specify user id or name')) as Response;
  };

  let key = params?.key;
  let user = params.user;
  if (key == '@') user = `@${user}`;


  const data = await request(`https://osu.ppy.sh/api/v2/users/${user}${params.mode ? `/${params.mode}` : ''}`, {
    method: 'GET',
    params: { key: key },
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};