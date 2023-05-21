import { types, response } from '../../../../../types/v2_forums_topic_edit';
import { response as topic_types } from '../../../../../types/v2_forums_topic_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: '',
  params: [
    {
      type: 'number',
      name: 'post_id',
      optional: false,
      description: 'Post id',
    },
    {
      type: 'number',
      name: 'body',
      optional: false,
      description: 'Body of the post',
    },
  ],
  return: 'response',
};


const name: types = async (post_id, body) => {
  const data = await request(`forums/posts/${post_id}`, {
    method: 'PUT',
    data: JSON.stringify({ body }),
  });

  return data;
};


export default name;