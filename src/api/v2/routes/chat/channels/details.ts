import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (channel: number): Promise<{
    channel: {
      channel_id: number;
      description: string;
      icon: string;
      moderated: boolean;
      name: string;
      type: string;
      current_user_attributes: {
        can_message: boolean;
        can_message_error: null;
        last_read_id: number;
      };
      last_message_id: number;
      last_read_id: number;
      users: number[];
    };
    users: {
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
    }[];
  }>;
};


const name: types = async (channel) => {
  const data = await request(`chat/channels/${channel}`, {
    method: 'GET',
    // params: obj,
  });

  return data;
};


export default name;