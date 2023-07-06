import { types } from '../../../../types/v2_user_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return details about user',
  params: [
    {
      type: 'string/number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      type: 'string/number',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string/number',
      name: 'key',
      optional: true,
      description: '\`\`\`id\`\`\` or \`\`\`username\`\`\`',
    },
  ],
  return: 'response',
};

const name: types = async (user, mode, key) => {
  let url = `users/${user}`;
  if (mode != null) url += `/${mode}`;

  const data = await request(url, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;