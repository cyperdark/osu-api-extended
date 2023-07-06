import { types } from '../../../../../types/v2_beatmap_id_attributes';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');
import { name as mods_name } from '../../../../../utility/mods';

export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'POST',
  description: 'Return attributes (stars, combo, stats) of beatmap',
  params: [
    {
      type: 'number',
      name: 'beatmap_id',
      optional: false,
      description: 'Beatmap id',
    },
    {
      name: 'body',
      params: [
        {
          type: 'string[] | number',
          name: 'mods',
          optional: true,
          description: 'Array of matching mods [\'HD\', \'DT\']',
        },
        {
          type: 'string',
          name: 'ruleset',
          optional: true,
          description: `\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\``,
        },
        {
          type: 'number',
          name: 'ruleset_id',
          optional: true,
          description: `\`\`\`0\`\`\` or \`\`\`1\`\`\` or \`\`\`2\`\`\` or \`\`\`3\`\`\``,
        },
      ]
    },
  ],
};



const name: types = async (beatmap_id, body = {}) => {
  if (body.mods) body.mods = Array.isArray(body.mods) ? body.mods : mods_name(body.mods).match(/.{1,2}/g);
  
  const data = await request(`beatmaps/${beatmap_id}/attributes`, {
    method: 'POST',
    data: JSON.stringify(body),
  });

  return data;
};


export default name;