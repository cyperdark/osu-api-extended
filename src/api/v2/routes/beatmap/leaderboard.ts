import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (beatmap: number, obj: {
    mode?: string,
    mods?: string,
    type?: string,
  }): Promise<{
    scores: {
      accuracy: number;
      best_id: number;
      created_at: string;
      id: number;
      max_combo: number;
      mode: string;
      mode_int: number;
      mods: string[];
      passed: boolean;
      perfect: boolean;
      pp: number;
      rank: string;
      replay: boolean;
      score: number;
      statistics: {
        count_100: number;
        count_300: number;
        count_50: number;
        count_geki: number;
        count_katu: number;
        count_miss: number;
      };
      user_id: number;
      current_user_attributes: {
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
        };
      };
    }[]
  }>;
};


const name: types = async (beatmap, obj) => {
  const data = await request(`beatmaps/${beatmap}/scores`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;