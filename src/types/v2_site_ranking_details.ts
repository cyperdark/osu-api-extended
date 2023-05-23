export interface response {
  cursor: {
    page: number;
  };
  ranking: {
    count_100?: number;
    count_300?: number;
    count_50?: number;
    count_miss?: number;
    level: {
      current: number;
      progress: number;
    };
    global_rank?: number;
    global_rank_exp?: number;
    pp?: number;
    pp_exp?: number;
    ranked_score: number;
    hit_accuracy?: number;
    play_count: number;
    play_time?: number;
    total_score?: number;
    total_hits?: number;
    maximum_combo?: number;
    replays_watched_by_others?: number;
    is_ranked?: boolean;
    grade_counts: {
      ss: number;
      ssh: number;
      s: number;
      sh: number;
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
        id: number;
      };
    };
    code?: string;
    active_users?: number;
    performance?: number;
    country: {
      code: string;
      name: string;
    };
  }[];
  total: number;
  beatmapsets: {
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
    hype?: string;
    id: number;
    nsfw: boolean;
    offset: number;
    play_count: number;
    preview_url: string;
    source: string;
    spotlight: boolean;
    status: string;
    title: string;
    title_unicode: string;
    track_id?: string;
    user_id: number;
    video: boolean;
    bpm: number;
    can_be_hyped: boolean;
    deleted_at?: string;
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
    availability: {
      download_disabled: boolean;
      more_information: string;
    };
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
      deleted_at?: string;
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
  spotlight: {
    end_date: string;
    id: number;
    mode_specific: boolean;
    name: string;
    start_date: string;
    type: string;
    participant_count: number;
  };
}


export interface types {
  /**
   * Gets the current ranking leaderboard for the specified type and game mode
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_site_ranking_details = await v2.site.ranking.details(mode, type, object);
   *   console.log(v2_site_ranking_details);
   * };
   * 
   * main();
   * ```
   * @param {string} mode ```osu``` or ```fruits``` or ```mania``` or ```taiko```
   * @param {string} type ```charts``` or ```country``` or ```performance``` or ```score```
   * @param {number} object.country Filter ranking by country code. Only available for ```type``` of ```performance```
   * @param {string} object.cursorPublished Pagination cursorPublished
   * @param {number} object.cursorId Pagination cursorId
   * @param {string} object.filter ```all``` or ```friends```
   * @param {string} object.spotlight The id of the spotlight if type is charts. Ranking for latest spotlight will be returned if not specified
   * @param {string} object.variant Filter ranking to specified mode variant. For ```mode``` of ```mania```, it's either ```4k``` or ```7k```. Only available for ```type``` of ```performance```
  */
  (mode: 'osu' | 'fruits' | 'mania' | 'taiko' , type: 'charts' | 'country' | 'performance' | 'score' , object: {country?: number, cursorPublished?: string, cursorId?: number, filter?: 'all' | 'friends' , spotlight?: string, variant?: string, }): Promise<response>;
}
