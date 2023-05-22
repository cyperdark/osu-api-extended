import { types } from '../../../../../types/v2_chat_channels_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return details about specified channel (only channel that you joined to)',
  params: [
    {
      type: 'number',
      name: 'channel',
      optional: true,
      description: 'id of the channel',
    },
  ],
  return: 'response',
};


const name: types = async (channel) => {
  const data = await request(`chat/channels/${channel}`, {
    method: 'GET',
  });

  return data;
};


export default name;