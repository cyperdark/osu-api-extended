import { types } from '../../../../../types/v2_beatmap_discussions_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return details of beatmap discussion',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'beatmap_id',
          optional: true,
          description: 'beatmap id',
        },
        {
          type: 'number',
          name: 'beatmapset_id',
          optional: true,
          description: 'beatmapset id',
        },
        {
          type: 'string',
          name: 'beatmapset_status',
          optional: true,
          description: '\`\`\`all\`\`\` or \`\`\`ranked\`\`\` or \`\`\`qualified\`\`\` or \`\`\`disqualified\`\`\` or \`\`\`never_qualified\`\`\` or \`\`\`loved\`\`\`',
        },
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'string[]',
          name: 'message_types',
          optional: true,
          description: '\`\`\`suggestion\`\`\` or \`\`\`problem\`\`\` or \`\`\`mapper_note\`\`\` or \`\`\`praise\`\`\` or \`\`\`hype\`\`\` or \`\`\`review\`\`\` or \`\`\`all\`\`\`',
        },
        {
          type: 'boolean',
          name: 'only_unresolved',
          optional: true,
          description: '\`\`\`true\`\`\` or \`\`\`false\`\`\`',
        },
        {
          type: 'number',
          name: 'page',
          optional: true,
          description: 'Search result page',
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
      ]
    }
  ],
};



const name: types = async (obj) => {
  const data = await request(`beatmapsets/discussions`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;