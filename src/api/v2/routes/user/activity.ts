import { types } from '../../../../types/v2_user_activity';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of recent user activity',
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'string',
          name: 'offset',
          optional: true,
          description: 'Result offset for pagination',
        },
      ]
    },
  ],
};


const name: types = async (user, object = {}) => {
  const data = await request(`users/${user}/recent_activity`, {
    method: 'GET',
    params: object,
  });

  return data;
};


export default name;