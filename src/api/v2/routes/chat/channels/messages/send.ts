import { types } from '../../../../../../types/v2_chat_channels_messages_send';
import { Description } from '../../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Send message to chat channel',
  params: [
    {
      type: 'number',
      name: 'channel_id',
      optional: false,
      description: 'The channel_id of the channel to send message to',
    },
    {
      type: 'number',
      name: 'message',
      optional: false,
      description: 'Message to send',
    },
    {
      type: 'number',
      name: 'is_action',
      optional: false,
      description: 'Whether the message is an action',
    },
  ],
  return: 'response',
};


const name: types = async (channel_id, message, is_action) => {
  const data = await request(`chat/channels/${channel_id}/messages`, {
    method: 'POST',
    data: JSON.stringify({ message, is_action }),
  });

  return data;
};


export default name;