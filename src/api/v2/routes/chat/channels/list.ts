import { types } from '../../../../../types/v2_chat_channels_list';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return list of channels',
  params: [],
  return: 'response',
};


const name: types = async () => {
  const data = await request(`chat/channels`, {
    method: 'GET',
  });

  return data;
};


export default name;