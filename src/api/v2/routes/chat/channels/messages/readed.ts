import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 0,
  title: __filename,
  method: 'PUT',
  description: 'This endpoint marks the channel as having being read up to the given \`\`\`message_id\`\`\`',
  params: [
    {
      type: 'number',
      name: 'channel',
      optional: false,
      description: 'id of the channel',
    },
    {
      type: 'number',
      name: 'message',
      optional: false,
      description: 'id of the message',
    },
    {
      type: 'number',
      name: 'channel_id',
      optional: true,
      description: 'The \`\`\`channel_id\`\`\` of the channel to mark as read',
    },
    {
      type: 'number',
      name: 'message_id',
      optional: true,
      description: 'The \`\`\`message_id\`\`\` of the message to mark as read up to',
    },
  ],
};

export interface types {
  (channel: string, message: object, obj: {
    channel_id?: string,
    message_id?: string,
  }): Promise<string>;
};


const name: types = async (channel, message, obj) => {
  const data = await request(`chat/channels/${channel}/mark-as-read/${message}`, {
    method: 'PUT',
    params: obj,
  });

  return data;
};


export default name;