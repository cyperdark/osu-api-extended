import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (user: number, mode: 'osu' | 'fruits' | 'mania' | 'taiko', key?: 'id' | 'username'): Promise<{
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
    cover_url: string;
    discord?: string;
    has_supported: boolean;
    interests?: string;
    join_date: string;
    kudosu: {
      total: number;
      available: number;
    };
    location?: string;
    max_blocks: number;
    max_friends: number;
    occupation?: string;
    playmode: string;
    playstyle?: string[];
    post_count: number;
    profile_order: string[];
    twitter?: string;
    website?: string;
    country: {
      code: string;
      name: string;
    };
    cover: {
      custom_url: string;
      url: string;
      id?: string;
      account_history?: [];
      badges: {
        awarded_at: string;
        description: string;
        image_url: string;
        url: string;
      }[];
    };
    beatmap_playcounts_count: number;
    comments_count: number;
    favourite_beatmapset_count: number;
    follower_count: number;
    graveyard_beatmapset_count: number;
    groups: [];
    guest_beatmapset_count: number;
    loved_beatmapset_count: number;
    mapping_follower_count: number;
    monthly_playcounts: {
      start_date: string;
      count: number;
    }[];
    page: {
      html: string;
      raw: string;
    };
    pending_beatmapset_count: number;
    previous_usernames: string[];
    ranked_beatmapset_count: number;
    replays_watched_counts: {
      start_date: string;
      count: number;
    }[];
    scores_best_count: number;
    scores_first_count: number;
    scores_pinned_count: number;
    scores_recent_count: number;
    statistics: {
    };
    level: {
      current: number;
      progress: number;
      global_rank: number;
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
    };
    grade_counts: {
      ss: number;
      ssh: number;
      s: number;
      sh: number;
      a: number;
      country_rank: number;
    };
    rank: {
      country: number;
    };
    support_level: number;
    user_achievements: {
      achieved_at: string;
      achievement_id: number;
    }[];
    rankHistory: {
      mode: string;
      data: number[];
    };
    rank_history: {
      mode: string;
      data: number[];
    };
    ranked_and_approved_beatmapset_count: number;
    unranked_beatmapset_count: number;
    last_visit?: string;
  }>;
};


const name: types = async (user, mode, key) => {
  const data = await request(`users/${user}/${mode}`, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;