import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
import { forums_details_response } from "../../types/v2/forums_details";


type Response = forums_details_response & IError;


export async function forums_details(params: {
  id: number;
}, addons?: IDefaultParams): Promise<Response> {
  if (params?.id == null) {
    return handleErrors(new Error(`Specify forum id`)) as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/forums/${params.id}`, {
    method: 'GET',
    params: {},
    addons,
  });


  if (data.error) return handleErrors(new Error(data.error));
  return data;
};