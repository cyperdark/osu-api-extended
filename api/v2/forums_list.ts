import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
import { forums_list_response } from "../../types/v2/forums_list";


type Response = forums_list_response[] & IError;


export async function forums_list(params?: {
  id: number;
}, addons?: IDefaultParams): Promise<Response> {
  const data = await request(`https://osu.ppy.sh/api/v2/forums`, {
    method: 'GET',
    params: {},
    addons,
  });


  if (data.error) return handleErrors(new Error(data.error));

  if (Array.isArray(data.forums)) return data.forums;
  return data;
}