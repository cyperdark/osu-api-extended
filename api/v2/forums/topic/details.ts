import { request } from "../../../../utility/request";
import { ForumPostDetails } from '../../../../types/forums_topic_details';


// FIXME: add query params
const name = async (topic_id: number, obj?: {
  sort?: 'id_asc' | 'id_desc',
  limit?: number,
  start?: string,
  end?: string,
  cursor_string?: string,
}): Promise<ForumPostDetails> => {
  const data = await request(`https://osu.ppy.sh/api/v2/forums/topics/${topic_id}`, {
    method: 'GET',
    params: obj,

  });

  return data;
};


export default name;