import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (user: number, type: 'recent' | 'best' | 'firsts' | 'pinned', obj: {
    include_fails?: string,
    mode?: string,
    limit?: number,
    offset?: string,
  }): Promise<{
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
    beatmapset: {
      artist: string;
      artist_unicode: string;
      covers: {
        cover: string;
        'cover@2x': string;
        card: string;
        'card@2x': string;
        list: string;
        'list@2x': string;
        slimcover: string;
        'slimcover@2x': string;
      };
      creator: string;
      favourite_count: number;
      id: number;
      nsfw: boolean;
      offset: number;
      play_count: number;
      preview_url: string;
      source: string;
      status: string;
      title: string;
      title_unicode: string;
      user_id: number;
      video: boolean;
      track_id?: number;
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
    };
  }[]>;
};


const name: types = async (user, type, obj) => {
  const data = await request(`users/${user}/scores/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;