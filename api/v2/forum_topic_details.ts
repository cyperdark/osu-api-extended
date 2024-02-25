import { request } from "../../utility/request";
import { ForumPostDetails } from '../../types/forums_topic_details';
import { IDefaultParams } from "../../types";


// FIXME: add query params
const name = async (params: {
  topic_id: number

  start_id?: string,
  end_id?: string,

  limit?: number,
  sort?: 'id_asc' | 'id_desc',

  cursor_string?: string,
}, addons?: IDefaultParams): Promise<ForumPostDetails> => {
  const object = {
    start: params.start_id,
    end: params.end_id,

    sort: params.sort,
    limit: params.limit,

    cursor_string: params.cursor_string,
  };


  const data = await request(`https://osu.ppy.sh/api/v2/forums/topics/${params.topic_id}`, {
    method: 'GET',
    params: object,
    addons,
  });


  return data;
};


export default name;