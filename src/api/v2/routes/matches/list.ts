import { types } from '../../../../types/v2_matches_list';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return array of the matches',
  params: [],
  return: 'response',
};


const name: types = async () => {
  const data = await request(`matches`, {
    method: 'GET',
  });

  return data;
};


export default name;