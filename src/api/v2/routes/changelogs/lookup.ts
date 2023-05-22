import { types } from '../../../../types/v2_changelogs_lookup';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns details of the specified build',
  params: [
    {
      type: 'string/number',
      name: 'changelog',
      optional: false,
      description: 'Build version, update stream name, or build ID',
    },
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'key',
          options: false,
          optional: false,
          description: 'Unset to query by build version or stream name, or \`\`\`id\`\`\` to query by build ID.',
        },
        {
          type: 'string[]',
          name: 'message_formats',
          optional: false,
          description: '\`\`\`html\`\`\` or \`\`\`markdown\`\`\`',
        },
      ]
    },
  ],
};


const name: types = async (changelog, obj) => {
  const data = await request(`changelog/${changelog}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;