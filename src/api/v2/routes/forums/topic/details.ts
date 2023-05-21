import { types } from '../../../../../types/v2_forums_topic_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return topic data and posts list',
  params: [
    {
      type: 'number',
      name: 'topic',
      optional: false,
      description: 'Topic id',
    },
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'cursor_string',
          optional: true,
          description: 'Parameter for pagination',
        },
        {
          type: 'string',
          name: 'sort',
          optional: true,
          description: '\`\`\`id_asc\`\`\` or \`\`\`id_desc\`\`\`',
        },
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of posts to be returned (20 default, 50 at most)',
        },
        {
          type: 'string',
          name: 'start',
          optional: true,
          description: 'First post id to be returned with sort set to id_asc. This parameter is ignored if cursor_string is specified',
        },
        {
          type: 'string',
          name: 'end',
          optional: true,
          description: 'Last post id to be returned with sort set to id_desc. This parameter is ignored if cursor_string is specified.',
        },
      ]
    },
  ],
};



const name: types = async (topic, obj) => {
  const data = await request(`forums/topics/${topic}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;