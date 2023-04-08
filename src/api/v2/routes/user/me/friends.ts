import { types } from '../../../../../types/v2_user_me_friends';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return list of your friedns',
  params: [

  ],
};


const name: types = async () => {
  const data = await request(`friends`, {
    method: 'GET',
  });

  return data;
};


export default name;