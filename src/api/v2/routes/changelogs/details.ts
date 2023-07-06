import { types } from '../../../../types/v2_changelogs_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns details of the specified build',
  params: [
    {
      type: 'string',
      name: 'stream',
      optional: false,
      description: '\`\`\`stable40\`\`\` or \`\`\`stable\`\`\` or \`\`\`beta40\`\`\` or \`\`\`cuttingedge\`\`\` or \`\`\`lazer\`\`\` or \`\`\`web\`\`\`',
    },
    {
      type: 'string',
      name: 'build',
      options: false,
      optional: false,
      description: '\`\`\`id\`\`\` or \`\`\`name\`\`\` of the build',
    },
  ],
};


const name: types = async (stream, build) => {
  const data = await request(`changelog/${stream}/${build}`, {
    method: 'GET',
  });

  return data;
};


export default name;