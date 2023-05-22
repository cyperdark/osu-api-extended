import { types } from "../../../../types/v2_notifications_list";
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: `This endpoint returns a list of the user's unread notifications. Sorted descending by id with limit of 50.`,
  params: [
    {
      type: 'string',
      name: 'max_id',
      options: false,
      optional: true,
      description: 'Maximum \`\`\`id\`\`\` fetched. Can be used to load earlier notifications. Defaults to no limit (fetch latest notifications)',
    },
  ],
  return: 'response',
};


const name: types = async (max_id) => {
  const data = await request(`notifications`, {
    method: 'GET',
    params: { max_id },
  });

  return data;
};


export default name;