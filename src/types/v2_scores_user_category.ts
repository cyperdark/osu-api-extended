export interface response {
  position: number;
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
  type: string;
  user_id: number;
  current_user_attributes: {
    pin: string;
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
    deleted_at: string;
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
    hype: string;
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
    track_id: string;
    user_id: number;
    video: boolean;
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
  };
  weight: {
    percentage: number;
    pp: number;
  };
}


export interface types {
  /**
   * Return list of user scores on a beatmap
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_scores_user_category = await v2.scores.user.category(user, type, object);
   *   console.log(v2_scores_user_category);
   * };
   * 
   * main();
   * ```
   * @param {number} user id of the user
   * @param {string} type ```recent``` or ```best``` or ```firsts``` or ```pinned```
   * @param {string} object.include_fails 
   * @param {string} object.mode 
   * @param {string} object.limit 
   * @param {string} object.offset 
  */
  (user: number, type: 'recent' | 'best' | 'firsts' | 'pinned' , object: {include_fails?: 'Only f' | 'recent sc' | 'es, include sc' | 'es of failed plays. Set to 1 to include them. Defaults to 0' , mode?: 'osu' | 'fruits' | 'mania' | 'taiko' , limit?: string, offset?: string, }): Promise<response[]>;
}
