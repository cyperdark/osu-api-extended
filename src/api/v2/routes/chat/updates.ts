import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (last_message_id: number, obj: {
    channel_id?: number,
    history_since?: number,
    includes?: ('presence' | 'messages' | 'silences')[],
    limit?: number,
  }): Promise<{
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
  }>;
};


const name: types = async (last_message_id, obj) => {
  const data = await request(`chat/updates`, {
    method: 'GET',
    params: { ...obj, ...{ since: last_message_id } },
  });

  return data;
};


export default name;