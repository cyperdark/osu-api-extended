import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { ForumsTopicsDetailsResponse } from "../../types/v2/forums_topics_details";


export const forums_topics_details = async (params: {
  id: number

  start_id?: string,
  end_id?: string,

  limit?: number,
  sort?: 'id_asc' | 'id_desc',

  cursor_string?: string,
}, addons?: IDefaultParams): Promise<ForumsTopicsDetailsResponse | IError> => {
  if (params.id == null) {
    return { error: new Error(`Specify topic id`) };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/forums/topics/${params.id}`, {
    method: 'GET',
    params: {
      start: params.start_id,
      end: params.end_id,

      sort: params.sort,
      limit: params.limit,

      cursor_string: params.cursor_string,
    },
    addons,
  });


  return data;
};