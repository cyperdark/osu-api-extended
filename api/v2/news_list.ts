import { IDefaultParams, IError } from "../../types";
import { NewsListResponse } from "../../types/v2/news_list";
import { request } from "../../utility/request";



export const news_list = async (params: {
  from_year?: string;
  limit?: string;
  cursor_string?: string;
} = {}, addons?: IDefaultParams): Promise<NewsListResponse | IError> => {
  const object: any = {};
  if (params.from_year != null) object.year = params.from_year;
  if (params.limit != null) object.limit = params.limit;
  if (params.cursor_string != null) object.cursor_string = params.cursor_string;


  const data = await request(`https://osu.ppy.sh/api/v2/news`, {
    method: 'GET',
    params: object,
    addons,
  });


  return data;
};