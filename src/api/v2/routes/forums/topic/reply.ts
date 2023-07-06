import { types } from '../../../../../types/v2_forums_topic_reply';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Edit your topic and post from the forum',
  params: [
    {
      type: 'number',
      name: 'topic_id',
      optional: false,
      description: 'Topic id',
    },
    {
      type: 'number',
      name: 'body',
      optional: false,
      description: 'Message body',
    },
  ],
  return: 'response',
};


const name: types = async (topic_id, body) => {
  const data = await request(`forums/topics/${topic_id}/reply`, {
    method: 'POST',
    data: JSON.stringify({ body }),
  });

  return data;
};


export default name;