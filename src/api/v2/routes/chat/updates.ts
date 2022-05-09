import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

export const description: any = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: `This endpoint returns new messages since the given message_id along with updated channel 'presence' data.`,
  params: [
    {
      type: 'number',
      name: 'channel_id',
      optional: true,
      description: 'Messages after the specified message_id to return',
    },
    {
      type: 'number',
      name: 'history_since',
      optional: true,
      description: 'UserSilence after the specified id to return',
    },
    {
      type: 'string array',
      name: 'includes',
      optional: true,
      description: 'List of \`\`\`presence\`\`\`, \`\`\`messages\`\`\`, \`\`\`silences\`\`\` fields to include in the response. Returns all if not specified',
    },
    {
      type: 'number',
      name: 'limit',
      optional: true,
      description: 'Maximum number of messages to return (max of 50)',
    },
    {
      type: 'number',
      name: 'since',
      optional: true,
      description: 'Messages after the specified message_id to return',
    },
  ],
};

export interface types {
  (obj: {
    channel_id?: number,
    history_since?: number,
    includes?: ('presence' | 'messages' | 'silences')[],
    limit?: number,
    since?: number,
  }): Promise<response>;
};

export interface response {
  messages: {
    message_id: number;
    sender_id: number;
    channel_id: number;
    timestamp: string;
    content: string;
    is_action: boolean;
    sender: {
      avatar_url: string;
      country_code: string;
      default_group: string;
      id: number;
      is_active: boolean;
      is_bot: boolean;
      is_deleted: boolean;
      is_online: boolean;
      is_supporter: boolean;
      last_visit: string;
      pm_friends_only: boolean;
      profile_colour: string;
      username: string;
    };
  }[];
  silences: {
    id: number;
    user_id: number;
  }[];
  presence: {
    channel_id: number;
    description: string;
    icon: string;
    moderated: boolean;
    name: string;
    type: string;
    current_user_attributes: {
      can_message: boolean;
      can_message_error: string;
      last_read_id: number;
    };
    last_message_id: number;
    last_read_id: number;
    users: number[];
  }[];
}



const name: types = async (obj) => {
  const data = await request(`chat/updates`, {
    method: 'GET',
    params: { ...obj },
  });

  return data;
};


export default name;