import { types } from '../../../../../../types/v2_chat_channels_messages_list';
import { Description } from '../../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return chat messages for a specific channel',
  params: [
    {
      type: 'number',
      name: 'channel_id',
      optional: false,
      description: 'id of the channel',
    },
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results (Max 50)',
        },
        {
          type: 'number',
          name: 'since',
          optional: true,
          description: 'Messages after the specified message id will be returned',
        },
        {
          type: 'number',
          name: 'until',
          optional: true,
          description: 'Messages up to but not including the specified message id will be returned',
        },
      ]
    },
  ],
};


const name: types = async (channel_id, object) => {
  const data = await request(`chat/channels/${channel_id}/messages`, {
    method: 'GET',
    params: object,
  });

  return data;
};


export default name;