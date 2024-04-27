import { IDefaultParams, IError } from "../../types";
import { WikiDetailsResponse } from "../../types/v2/wiki_details";
import { request } from "../../utility/request";


type Response = WikiDetailsResponse[] & IError;


export const wiki_details = async (params: {
  locale: string;
  path_name: string;
}, addons?: IDefaultParams): Promise<Response> => {
  if (params.locale == null) {
    return { error: new Error(`Specify locale code. Example: en`) } as Response;
  };

  if (params.path_name == null) {
    return { error: new Error(`Specify wiki page path`) } as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/wiki/${params.locale}/${params.path_name}`, {
    method: 'GET',
    addons,
  });


  return data;
};