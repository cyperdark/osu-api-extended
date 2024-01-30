export interface response {
  avatar_url: string
  country_code: string
  default_group: string
  id: number
  is_active: boolean
  is_bot: boolean
  is_deleted: boolean
  is_online: boolean
  is_supporter: boolean
  last_visit: any
  pm_friends_only: boolean
  profile_colour: any
  username: string
  cover_url: string
  discord: string
  has_supported: boolean
  interests: string
  join_date: string
  location: string
  max_blocks: number
  max_friends: number
  occupation: any
  playmode: string
  playstyle: Array<string>
  post_count: number
  profile_order: Array<string>
  title: any
  title_url: any
  twitter: string
  website: string
  country: {
    code: string
    name: string
  }
  cover: {
    custom_url: string
    url: string
    id: any
  }
  is_restricted: boolean
  kudosu: {
    available: number
    total: number
  }
  account_history: Array<any>
  active_tournament_banner: any
  active_tournament_banners: Array<any>
  badges: Array<any>
  beatmap_playcounts_count: number
  comments_count: number
  favourite_beatmapset_count: number
  follower_count: number
  graveyard_beatmapset_count: number
  groups: Array<any>
  guest_beatmapset_count: number
  loved_beatmapset_count: number
  mapping_follower_count: number
  monthly_playcounts: Array<{
    start_date: string
    count: number
  }>
  nominated_beatmapset_count: number
  page: {
    html: string
    raw: string
  }
  pending_beatmapset_count: number
  previous_usernames: Array<any>
  rank_highest: {
    rank: number
    updated_at: string
  }
  ranked_beatmapset_count: number
  replays_watched_counts: Array<{
    start_date: string
    count: number
  }>
  scores_best_count: number
  scores_first_count: number
  scores_pinned_count: number
  scores_recent_count: number
  session_verified: boolean
  statistics: {
    count_100: number
    count_300: number
    count_50: number
    count_miss: number
    level: {
      current: number
      progress: number
    }
    global_rank: number
    global_rank_exp: number
    pp: number
    pp_exp: number
    ranked_score: number
    hit_accuracy: number
    play_count: number
    play_time: number
    total_score: number
    total_hits: number
    maximum_combo: number
    replays_watched_by_others: number
    is_ranked: boolean
    grade_counts: {
      ss: number
      ssh: number
      s: number
      sh: number
      a: number
    }
    country_rank: number
    rank: {
      country: number
    }
  }
  statistics_rulesets: {
    osu: {
      count_100: number
      count_300: number
      count_50: number
      count_miss: number
      level: {
        current: number
        progress: number
      }
      global_rank: number
      global_rank_exp: number
      pp: number
      pp_exp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: boolean
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
    taiko: {
      count_100: number
      count_300: number
      count_50: number
      count_miss: number
      level: {
        current: number
        progress: number
      }
      global_rank: any
      global_rank_exp: any
      pp: number
      pp_exp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: boolean
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
    fruits: {
      count_100: number
      count_300: number
      count_50: number
      count_miss: number
      level: {
        current: number
        progress: number
      }
      global_rank: any
      global_rank_exp: any
      pp: number
      pp_exp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: boolean
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
    mania: {
      count_100: number
      count_300: number
      count_50: number
      count_miss: number
      level: {
        current: number
        progress: number
      }
      global_rank: any
      global_rank_exp: any
      pp: number
      pp_exp: number
      ranked_score: number
      hit_accuracy: number
      play_count: number
      play_time: number
      total_score: number
      total_hits: number
      maximum_combo: number
      replays_watched_by_others: number
      is_ranked: boolean
      grade_counts: {
        ss: number
        ssh: number
        s: number
        sh: number
        a: number
      }
    }
  }
  support_level: number
  user_achievements: Array<{
    achieved_at: string
    achievement_id: number
  }>
  rank_history: {
    mode: string
    data: Array<number>
  }
  rankHistory: {
    mode: string
    data: Array<number>
  }
  ranked_and_approved_beatmapset_count: number
  unranked_beatmapset_count: number
}


export interface types {
  /**
   * Return user download quota number?
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_user_me_download_quota = await v2.user.me.download.quota();
   *   console.log(v2_user_me_download_quota);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response>;
}
