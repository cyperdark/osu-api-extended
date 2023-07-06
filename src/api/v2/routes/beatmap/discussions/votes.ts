import { types } from '../../../../../types/v2_beatmap_discussions_votes';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return votes (+discussions, users) from beatmap set discussions',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'beatmapset_discussion_id',
          optional: true,
          description: 'id of beatmap set id',
        },
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'number',
          name: 'page',
          optional: true,
          description: 'Search page',
        },
        {
          type: 'number',
          name: 'receiver',
          optional: true,
          description: 'id of the user',
        },
        {
          type: 'number',
          name: 'score',
          optional: true,
          description: '\`\`\`1\`\`\` for up vote, \`\`\`-1\`\`\` for down vote',
        },
        {
          type: 'string',
          name: 'sort',
          optional: true,
          description: '\`\`\`id_desc\`\`\` or \`\`\`id_asc\`\`\`',
        },
        {
          type: 'number',
          name: 'user',
          optional: true,
          description: 'id of the user',
        },
      ],
    },
  ],
};



const name: types = async (obj) => {
  const data = await request(`beatmapsets/discussions/votes`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;