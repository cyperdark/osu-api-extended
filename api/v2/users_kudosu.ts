import { IDefaultParams, IError } from "../../types";
import { UsersKudosuResponse } from "../../types/v2/users_kudosu";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = UsersKudosuResponse[] & IError;


export const users_kudosu = async (params: {
  id: number;
  limit?: number;
  offset?: number;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.id == null) {
    return handleErrors(`Specify user id`) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/users/${params.id}/kudosu`, {
    method: 'GET',
    params: {
      limit: params.limit,
      offset: params.offset,
    },
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};