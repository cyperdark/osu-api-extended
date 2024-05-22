import { IDefaultParams, IError } from "../../types";
import { NewsDetailsResponse } from "../../types/v2/news_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = NewsDetailsResponse & IError;


export const news_details = async (params: {
  news_query: string;
  key: 'id' | 'slug' | null;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.news_query == null) {
    return handleErrors(`Specify a query`) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/news/${params.news_query}`, {
    method: 'GET',
    params: { key: (params.key === 'slug' ? undefined : params.key) },
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};