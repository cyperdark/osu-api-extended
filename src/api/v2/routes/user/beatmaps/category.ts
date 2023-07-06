import { types } from '../../../../../types/v2_user_beatmaps_category';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return beatmaps list of specified user',
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      type: 'string',
      name: 'type',
      optional: false,
      description: '\`\`\`favourite\`\`\` or \`\`\`loved\`\`\` or \`\`\`ranked\`\`\` or \`\`\`pending\`\`\` or \`\`\`graveyard\`\`\`',
    },
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'number',
          name: 'offset',
          optional: true,
          description: 'Result offset for pagination',
        },
      ]
    },
  ],
};


const name: types = async (user, type, obj) => {
  const data = await request(`users/${user}/beatmapsets/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;