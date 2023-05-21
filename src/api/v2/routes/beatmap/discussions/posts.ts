import { types } from '../../../../../types/v2_beatmap_discussions_posts';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return posts from beatmap set discussions',
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
          type: 'string',
          name: 'sort',
          optional: true,
          description: '\`\`\`id_desc\`\`\` or \`\`\`id_asc\`\`\`',
        },
        {
          type: 'string[]',
          name: 'types',
          optional: true,
          description: '\`\`\`first\`\`\` or \`\`\`replay\`\`\` or \`\`\`system\`\`\`',
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
  const data = await request(`beatmapsets/discussions/posts`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;