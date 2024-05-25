import { IDefaultParams, IError } from "../../types";
import { NewsListResponse } from "../../types/v2/news_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = NewsListResponse & IError;


export const news_list = async (params: {
  from_year?: string;
  limit?: string;
  cursor_string?: string;
} = {}, addons?: IDefaultParams): Promise<Response> => {
  const object: any = {
    year: params.from_year,
    limit: params.limit,
    cursor_string: params.cursor_string,
  };


  const data = await request(`https://osu.ppy.sh/api/v2/news`, {
    method: 'GET',
    params: object,
    addons,
  });

  if (data.error) return handleErrors(data.error);


  return data;
};