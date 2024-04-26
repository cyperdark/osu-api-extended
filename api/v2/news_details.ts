import { IDefaultParams, IError } from "../../types";
import { NewsDetailsResponse } from "../../types/v2/news_details";
import { request } from "../../utility/request";



export const news_details = async (params: {
  news_id: string;
  key?: 'id' | null;
}, addons?: IDefaultParams): Promise<NewsDetailsResponse | IError> => {
  if (params.news_id == null) {
    return { error: new Error(`Specify news id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/news/${params.news_id}`, {
    method: 'GET',
    params: { key: params?.key },
    addons,
  });


  return data;
};