import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return array of backgrounds',
  params: [
  ],
};

export interface types {
  (): Promise<response>;
};

export interface response {
  ends_at: string;
  backgrounds: {
    url: string;
    user: {
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
};


const name: types = async () => {
  const data = await request(`seasonal-backgrounds`, {
    method: 'GET',
  });

  return data;
};


export default name;