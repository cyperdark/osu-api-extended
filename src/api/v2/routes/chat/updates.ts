import { types } from '../../../../types/v2_chat_updates';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: `This endpoint returns new messages since the given message_id along with updated channel 'presence' data.`,
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'history_since',
          optional: true,
          description: 'UserSilence after the specified id to return',
        },
        {
          type: 'string[]',
          name: 'includes',
          optional: true,
          description: '\`\`\`presence\`\`\`, \`\`\`messages\`\`\`, \`\`\`silences\`\`\`',
        },
        {
          type: 'number',
          name: 'since',
          optional: false,
          description: 'Messages after the specified message_id to return',
        },
      ],
    }
  ],
  return: 'response',
};


const name: types = async (obj) => {
  const data = await request(`chat/updates`, {
    method: 'GET',
    params: { ...obj },
  });

  return data;
};


export default name;