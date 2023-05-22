import { types } from '../../../../../../types/v2_chat_channels_messages_markAsReaded';
import { Description } from '../../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'PUT',
  description: 'This endpoint marks the channel as having being read up to the given \`\`\`message_id\`\`\`',
  params: [
    {
      type: 'number',
      name: 'channel_id',
      options: false,
      optional: true,
      description: 'The \`\`\`channel_id\`\`\` of the channel to mark as read',
    },
    {
      type: 'number',
      name: 'message_id',
      options: false,
      optional: true,
      description: 'The \`\`\`message_id\`\`\` of the message to mark as read up to',
    },
  ],
};


const name: types = async (channel_id, message_id) => {
  const data = await request(`chat/channels/${channel_id}/mark-as-read/${message_id}`, {
    method: 'PUT',
    params: { channel_id, message_id }
  });

  return data;
};


export default name;