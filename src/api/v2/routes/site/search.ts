import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: {
    mode?: 'all' | 'user' | 'wiki_page',
    query?: string,
    page?: number
  }): Promise<{
    user: {
      data: {
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
      total: number;
    };
    wiki_page: {
      data: {
        available_locales: string[];
        layout: string;
        locale: string;
        markdown: string;
        path: string;
        subtitle: string;
        tags: string[];
        title: string;
      }[];
      total: number;
    };
  }>;
};


const name: types = async (obj) => {
  const data = await request(`search`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;