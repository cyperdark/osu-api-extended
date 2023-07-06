import { types } from '../../../../../types/v2_scores_user_beatmap';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return best user score on beatmap',
  params: [
    {
      type: 'number',
      name: 'beatmap',
      optional: false,
      description: 'id of the beatmap',
    },
    {
      type: 'string/number',
      name: 'user',
      optional: true,
      description: 'id of the user',
    },
    {
      name: 'object',
      optional: true,
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
          type: 'boolean',
          name: 'best_only',
          optional: true,
          description: 'Return only best score from the beatmap',
        }
      ]
    },
  ],
};


const name: types = async (beatmap, user, obj) => {
  let url = `beatmaps/${beatmap}/scores/users/${user}`;
  if (!obj.best_only) url += '/all';

  const data = await request(url, {
    method: 'GET',
    params: obj,
  });

  if (data.scores) return data.scores
  return data;
};


export default name;