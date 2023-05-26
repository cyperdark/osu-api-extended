import { types, response } from '../../../../../types/v2_scores_user_category';
import { id as mods_id } from '../../../../../utility/mods';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of user scores on a beatmap',
  imports: [
    'mods'
  ],
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
          type: 'boolean',
          name: 'include_fails',
          options: false,
          optional: true,
          description: 'Only for \`\`\`recent\`\`\` scores, include scores of failed plays. Set to \`\`\`true\`\`\` to include them. Defaults to \`\`\`false\`\`\`',
        },
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
        },
        {
          type: 'number',
          name: 'mods',
          options: false,
          optional: true,
          description: 'Use \`\`\`mods.enums\`\`\` instead of mods id or name',
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

  if (Array.isArray(data)) {
    const transform = data.map((v, i) => ({
      position: i + 1,
      mods_id: mods_id(v.mods.join('')) || 0,
      ...v
    }));

    if (obj.mods) return transform.filter(r => (r.mods_id & obj.mods) > 0);
    return transform;
  };

  return data;
};


export default name;