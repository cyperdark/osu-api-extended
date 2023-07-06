import { types } from '../../../../types/v2_changelogs_list';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns a listing of update streams, builds, and changelog entries',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'from',
          optional: true,
          description: 'Minimum build version',
        },
        {
          type: 'string',
          name: 'to',
          optional: true,
          description: 'Maximum build version',
        },
        {
          type: 'number',
          name: 'max_id',
          optional: true,
          description: 'Maximum build ID',
        },
        {
          type: 'string',
          name: 'stream',
          optional: true,
          description: '\`\`\`stable40\`\`\` or \`\`\`stable\`\`\` or \`\`\`beta40\`\`\` or \`\`\`cuttingedge\`\`\` or \`\`\`lazer\`\`\` or \`\`\`web\`\`\`',
        },
        {
          type: 'string[]',
          name: 'message_formats',
          optional: true,
          description: '\`\`\`html\`\`\` or \`\`\`markdown\`\`\`',
        },
      ],
    }
  ],
};


const name: types = async (obj) => {
  const data = await request(`changelog`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;