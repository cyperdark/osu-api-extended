// import { types } from '../../../../../types/v2_chat_channels_join';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Remove channel by id',
  params: [
    {
      type: 'number',
      name: 'channel_id',
      optional: false,
      description: 'Channel id',
    },
    {
      type: 'number',
      name: 'user_id',
      optional: false,
      description: 'User id',
    }
  ],
  return: 'response',
};

export interface types {
  (channel_id: number, user_id: number): Promise<{

  }[]>;
};


const name: types = async (channel_id, user_id) => {
  const data = await request(`chat/channels/${channel_id}/users/${user_id}`, {
    method: 'DELETE',
  });

  return data;
};


export default name;