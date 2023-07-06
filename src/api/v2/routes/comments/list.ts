import { types } from '../../../../types/v2_comments_list';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns a list comments and their replies up to 2 levels deep',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'commentable_type',
          optional: true,
          description: '\`\`\`news_post\`\`\` or \`\`\`beatmapset\`\`\`',
        },
        {
          type: 'string',
          name: 'commentable_id',
          optional: true,
          description: 'id of the resource to get comments for',
        },
        {
          name: 'cursor',
          params: [
            {
              type: 'number',
              name: 'id',
              optional: true,
              description: '',
            },
            {
              type: 'string',
              name: 'created_at',
              optional: true,
              description: '',
            },
          ]
        },
        {
          type: 'string',
          name: 'parent_id',
          optional: true,
          description: 'id of the comment parent',
        },
        {
          type: 'string',
          name: 'sort',
          optional: true,
          description: '\`\`\`new\`\`\` or \`\`\`old\`\`\` or \`\`\`top\`\`\`',
        },
      ],
    }
  ],
};


const name: types = async (obj) => {
  const data = await request(`comments`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;