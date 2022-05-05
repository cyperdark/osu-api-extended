import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: {
    beatmapset_discussion_id?: number,
    limit?: number,
    page?: number,
    receiver?: number,
    score?: 1 | -1,
    sort?: 'id_desc' | 'id_asc',
    user?: number,
  }): Promise<{
    discussions: {
      id: number;
      beatmapset_id: number;
      beatmap_id: number;
      user_id: number;
      message_type: string;
      timestamp: number;
      resolved: boolean;
      can_be_resolved: boolean;
      can_grant_kudosu: boolean;
      created_at: string;
      updated_at: string;
      last_post_at: string;
      kudosu_denied: boolean;
    }[];
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
      username: string;
      groups: {
        colour: string;
        has_listing: boolean;
        has_playmodes: boolean;
        id: number;
        identifier: string;
        is_probationary: boolean;
        name: string;
        short_name: string;
        playmodes: object;
      }[];
      profile_colour: string;
    }[];
    votes: {
      beatmapset_discussion_id: number;
      created_at: string;
      id: number;
      score: number;
      updated_at: string;
      user_id: number;
    }[];
    cursor: {
      page: number;
      limit: number;
    };
    cursor_string: string;
  }>;
};


const name: types = async (obj) => {
  const data = await request(`beatmapsets/discussions/votes`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;