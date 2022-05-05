import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (): Promise<{
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit?: string;
    pm_friends_only: boolean;
    username: string;
    country: {
      code: string;
      name: string;
    };
    cover: {
      custom_url?: string;
      url: string;
      id?: string;
    };
    groups?: {
      colour: object;
      has_listing: boolean;
      has_playmodes: boolean;
      id: number;
      identifier: string;
      is_probationary: boolean;
      name: string;
      short_name: string;
      playmodes: object;
    }[];
    statistics: {
      level: {
        current: number;
        progress: number;
      };
      global_rank?: number;
      pp: number;
      ranked_score: number;
      hit_accuracy: number;
      play_count: number;
      play_time: number;
      total_score: number;
      total_hits: number;
      maximum_combo: number;
      replays_watched_by_others: number;
      is_ranked: boolean;
      grade_counts: {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
      };
    };
    support_level: number;
    profile_colour?: string;
  }[]>;
};


const name: types = async () => {
  const data = await request(`friends`, {
    method: 'GET',
  });

  return data;
};


export default name;