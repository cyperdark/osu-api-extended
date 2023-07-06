import { types } from '../../../../../../types/v2_user_me_download_quota';
import { Description } from '../../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return user download quota number?',
  params: [

  ],
  return: 'response',
};


const name: types = async () => {
  const data = await request(`me/download-quota-check`, {
    method: 'GET',
  });

  return data;
};


export default name;