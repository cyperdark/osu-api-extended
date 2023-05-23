export interface response {
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
  country: {
    code: string;
    name: string;
  };
  cover: {
    custom_url: string;
    url: string;
    id: string;
  };
  groups: {
    colour: string;
    has_listing: boolean;
    has_playmodes: boolean;
    id: number;
    identifier: string;
    is_probationary: boolean;
    name: string;
    short_name: string;
    playmodes?: string;
  }[];
  statistics_rulesets: {
    osu: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: number;
      pp: number;
      pp_exp: number;
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
    taiko: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: string;
      pp: number;
      pp_exp: number;
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
    fruits: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: string;
      pp: number;
      pp_exp: number;
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
    mania: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_miss: number;
      level: {
        current: number;
        progress: number;
      };
      global_rank: string;
      global_rank_exp: number;
      pp: number;
      pp_exp: number;
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
  };
}


export interface types {
  /**
   * Return list of users
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_users_details = await v2.users.details(ids);
   *   console.log(v2_users_details);
   * };
   * 
   * main();
   * ```
   * @param {number[]} ids ids of the users (limit 50 users per request)
  */
  (ids: number[]): Promise<response[]>;
}
