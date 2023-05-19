import { types } from '../../../../types/v2_scores_beatmap';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns the top scores for a beatmap',
  params: [
    {
      type: 'number',
      name: 'beatmap',
      optional: false,
      description: 'id of the beatmap',
    },
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
        },
        {
          type: 'string[]',
          name: 'mods',
          optional: true,
          description: 'Array of matching mods [\'HD\', \'DT\']',
        },
        {
          type: 'string',
          name: 'type',
          optional: true,
          description: '\`\`\`global\`\`\` or \`\`\`country\`\`\` or \`\`\`friend\`\`\`',
        },
      ]
    },
  ],
};


const name: types = async (beatmap, obj) => {
  const data = await request(`beatmaps/${beatmap}/scores`, {
    method: 'GET',
    params: obj,
  });

  if (!data.scores) return data;
  return data.scores.map((v: any, i: number) => ({ position: i + 1, ...v }));
};


export default name;