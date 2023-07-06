import { types } from '../../../../../types/v2_user_me_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return details about your account',
  params: [
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
  ],
  return: 'response',
};


const name: types = async (mode) => {
  const data = await request(`me/${mode}`, {
    method: 'GET',
  });

  return data;
};


export default name;