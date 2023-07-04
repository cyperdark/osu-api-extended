import { types, response } from '../../../../types/v2_users_events';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of events in order of creation time',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'sort',
          optional: true,
          description: '\`\`\`id_desc\`\`\` or \`\`\`id_asc\`\`\`',
        },
        {
          type: 'string',
          name: 'cursor_string',
          optional: true,
          description: 'Parameter for pagination',
        },
        {
          type: 'string[]',
          name: 'type',
          optional: true,
          description: '\`\`\`achievement\`\`\` or \`\`\`beatmapPlaycount\`\`\` or \`\`\`beatmapsetApprove\`\`\` or \`\`\`beatmapsetDelete\`\`\` or \`\`\`beatmapsetRevive\`\`\` or \`\`\`beatmapsetUpdate\`\`\` or \`\`\`beatmapsetUpload\`\`\` or \`\`\`rank\`\`\` or \`\`\`userSupportAgain\`\`\` or \`\`\`userSupportFirst\`\`\` or \`\`\`userSupportGift\`\`\` or \`\`\`usernameChange\`\`\`',
        }
      ]
    },
  ],
  return: 'response',
};


const name: types = async (object) => {
  const data: response = await request(`events`, {
    method: 'GET',
    params: { sort: object.sort, cursor_string: object.cursor_string },
  });


  if (object.type != null) {
    if (!Array.isArray(object.type)) throw new Error('Event Type must be an Array of options');

    const sorted = data.events.filter(r => object.type.includes(r.type));
    data.events = sorted;
  };


  return data;
};


export default name;