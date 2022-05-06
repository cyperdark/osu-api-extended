import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (mode: 'osu' | 'fruits' | 'mania' | 'taiko', type: 'charts' | 'country' | 'performance' | 'score', obj: {
    country?: number,
    cursorPublished?: string,
    cursorId?: number
    filter?: 'all' | 'friends',
    spotlight?: string,
    variant?: 'all' | '4k' | '7k',
  }): Promise<{

  }[]>;
};
export interface Root {
  cursor: {
    page: number;
  };
  ranking: {
    level: {
      current: number;
      progress: number;
    };
    global_rank?: number | null;
    pp?: number | null;
    ranked_score: number;
    hit_accuracy?: number | null;
    play_count: number;
    play_time?: number | null;
    total_score?: number | null;
    total_hits?: number | null;
    maximum_combo?: number | null;
    replays_watched_by_others?: number | null;
    is_ranked?: boolean | null;
    grade_counts: {
      ss: number;
      ssh?: number | null;
      s: number;
      sh?: number | null;
      a: number;
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
      last_visit?: string | null;
      pm_friends_only: boolean;
      profile_colour?: string | null;
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
    code?: string | null;
    active_users?: number | null;
    performance?: number | null;
    country: {
      code: string;
      name: string;
    };
  }[];
  total?: number | null;
  beatmapsets?: {
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
    hype?: null;
    id: number;
    nsfw: boolean;
    offset: number;
    play_count: number;
    preview_url: string;
    source: string;
    status: string;
    title: string;
    title_unicode: string;
    track_id?: number | null;
    user_id: number;
    video: boolean;
    availability: {
      download_disabled: boolean;
      more_information?: null;
    };
    bpm: number;
    can_be_hyped: boolean;
    discussion_enabled: boolean;
    discussion_locked: boolean;
    is_scoreable: boolean;
    last_updated: string;
    legacy_thread_url: string;
    nominations_summary: {
      current: number;
      required: number;
    };
    ranked: number;
    ranked_date: string;
    storyboard: boolean;
    submitted_date: string;
    tags: string;
    has_favourited: boolean;
    beatmaps: {
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
      deleted_at?: null;
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
    }[];
  }[];
  spotlight?: {
    end_date: string;
    id: number;
    mode_specific: boolean;
    name: string;
    start_date: string;
    type: string;
    participant_count: number;
  };
}


const name: types = async (mode, type, obj) => {
  const data = await request(`rankings/${mode}/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;