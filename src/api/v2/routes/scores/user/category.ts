import { types, response } from '../../../../../types/v2_scores_user_category';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of user scores on a beatmap',
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
      description: '\`\`\`recent\`\`\` or \`\`\`best\`\`\` or \`\`\`firsts\`\`\` or \`\`\`pinned\`\`\`',
    },
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'include_fails',
          optional: true,
          description: 'Only for \`\`\`recent\`\`\` scores, include scores of failed plays. Set to \`\`\`1\`\`\` to include them. Defaults to \`\`\`0\`\`\`',
        },
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
        },
        {
          type: 'string',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'string',
          name: 'offset',
          optional: true,
          description: 'Result offset for pagination',
        },
      ]
    },
  ],
};


const name: types = async (user, type, obj) => {
  const data: response[] = await request(`users/${user}/scores/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data.map((v, i) => ({ position: i + 1, ...v }));
};


export default name;