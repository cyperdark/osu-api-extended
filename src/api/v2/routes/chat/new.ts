import { types } from '../../../../types/v2_chat_new';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

export const description: Description = {
  auth: 3,
  title: __filename,
  method: 'GET',
  description: 'Send new message to user',
  params: [
    {
      type: 'string',
      name: 'target_id',
      optional: false,
      description: 'User id to start PM with',
    },
    {
      type: 'string',
      name: 'message',
      optional: false,
      description: 'message to send',
    },
    {
      type: 'boolean',
      name: 'is_action',
      optional: true,
      description: 'whether the message is an action',
    },
    {
      type: 'string',
      name: 'uuid',
      optional: true,
      description: 'client-side message identifier which will be sent back in response and websocket json',
    },
  ],
  return: 'response',
};


const name: types = async (target_id, message, is_action, uuid) => {
  const data = await request(`chat/new`, {
    method: 'POST',
    data: JSON.stringify({ target_id, message, is_action, uuid }),
  });

  return data;
};


export default name;