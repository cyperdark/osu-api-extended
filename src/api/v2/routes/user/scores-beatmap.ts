import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (beatmap: number, user: number, obj: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    mods?: number,
  }): Promise<{
    position: number;
    score: {
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
        pin: {
          is_pinned: boolean;
          score_id: number;
          score_type: string;
        };
      };
    };
    beatmap: {
      beatmapset_id: number;
      difficulty_rating: number;
      id: number;
      mode: string;
      status: string;
      total_length: number;
      user_id: number;
      version: string;
      accuracy: number;
      ar: number;
      bpm: number;
      convert: boolean;
      count_circles: number;
      count_sliders: number;
      count_spinners: number;
      cs: number;
      drain: number;
      hit_length: number;
      is_scoreable: boolean;
      last_updated: string;
      mode_int: number;
      passcount: number;
      playcount: number;
      ranked: number;
      url: string;
      checksum: string;
    };
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
      pm_friends_only: boolean;
      username: string;
      country: {
        code: string;
        name: string;
      };
      cover: {
        custom_url: string;
        url: string;
      };
    };
  }>;
};


const name: types = async (beatmap, user, obj) => {
  const data = await request(`beatmaps/${beatmap}/scores/users/${user}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;