import { types } from '../../../../types/v2_matches_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return match data for specified id',
  params: [
    {
      type: 'number',
      name: 'match',
      optional: false,
      description: 'id of the match',
    },
  ],
};


const name: types = async (match) => {
  const data = await request(`matches/${match}`, {
    method: 'GET',
  });

  return data;
};


export default name;