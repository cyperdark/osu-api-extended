import { IDefaultParams, IError } from "../../types";
import { NewsDetailsResponse } from "../../types/v2/news_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = NewsDetailsResponse & IError;


export const news_details = async (params: {
  news_id: string;
  key?: 'id' | null;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.news_id == null) {
    return handleErrors(`Specify news id`) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/news/${params.news_id}`, {
    method: 'GET',
    params: { key: params?.key },
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};