import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (user_id: number, message: string, is_action: true | false): Promise<{
    channel: {
      channel_id: number;
      description: string;
      icon: string;
      moderated: boolean;
      name: string;
      type: string;
      last_message_id: number;
      users: number[];
    };
    message: {
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
        pm_friends_only: boolean;
        username: string;
      };
    };
    new_channel_id: number;
  }>;
};


const name: types = async (user_id: number, message: string, is_action: true | false) => {
  const data = await request(`chat/new`, {
    method: 'POST',
    data: JSON.stringify({
      target_id: user_id,
      message: message,
      is_action: is_action,
    }),
  });

  return data;
};


export default name;