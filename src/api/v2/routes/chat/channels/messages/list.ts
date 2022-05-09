import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return chat messages for a specific channel',
  params: [
    {
      type: 'number',
      name: 'channel',
      optional: false,
      description: 'id of the channel',
    },
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
  ],
};

export interface types {
  (channel: number, obj: {
    limit?: number,
    since?: number,
    until?: number,
  }): Promise<response[]>;
};

export interface response {
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
}



const name: types = async (channel, obj) => {
  const data = await request(`chat/channels/${channel}/messages`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;