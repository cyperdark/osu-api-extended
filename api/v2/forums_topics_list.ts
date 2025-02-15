import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
import { forums_topics_list_response } from "../../types/v2/forums_topics_list";


type Response = forums_topics_list_response & IError;


export const forums_topics_list = async (params: {
  id: number

  sort?: 'new' | 'old',
  limit?: number;
  cursor_string?: string,
}, addons?: IDefaultParams): Promise<Response> => {
  if (params?.id == null) {
    return handleErrors(new Error('Specify forum id')) as Response
  };


  const data = await request(`https://osu.ppy.sh/api/v2/forums/topics`, {
    method: 'GET',
    params: {
      forum_id: params.id,
      sort: params.sort,
      limit: params.limit,
      cursor_string: params.cursor_string,
    },
    addons,
  });


  if (data.error) return handleErrors(new Error(data.error));
  return data;
};