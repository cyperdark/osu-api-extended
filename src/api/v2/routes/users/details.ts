import { types } from '../../../../types/v2_users_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of users',
  params: [
    {
      type: 'number[]',
      name: 'ids',
      optional: false,
      description: 'ids of the users (limit 50 users per request)',
    }
  ],
};


const name: types = async (ids) => {
  const data = await request(`users`, {
    method: 'GET',
    params: {
      ids
    },
  });

  if (data.users) return data.users;
  return data;
};


export default name;