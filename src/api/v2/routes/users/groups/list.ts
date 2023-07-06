import { types } from '../../../../../types/v2_users_groups_list';
import { Description } from '../../../../../utility/types';


import { request, namespace, RequestNamespace } from "../../../../../utility/request";
// const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 3,
  title: __filename,
  method: 'GET',
  description: 'Return array of users from specified group id',
  params: [
    {
      type: 'number',
      name: 'id',
      optional: false,
      description: '\`\`\`4\`\`\` or \`\`\`7\`\`\` or \`\`\`11\`\`\` or \`\`\`16\`\`\` or \`\`\`22\`\`\` or \`\`\`28\`\`\` or \`\`\`31\`\`\` or \`\`\`32\`\`\`',
    },
  ],
};


const name: types = async (id) => {
  try {
    const data = await request(`https://osu.ppy.sh/groups/${id}`, {
      method: 'GET',
    });

    const parse = data.split('<script id="json-users" type="application/json">')[1].split('</script>')[0];
    return JSON.parse(parse);
  } catch (err: any) {
    console.log('groups-list error', id, err.message);

    return [];
  }
};


export default name;