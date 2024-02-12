export interface response {
  position: number
  mods_id: number
  maximum_statistics: {
    great: number
    legacy_combo_increase: number
  }
  mods: Array<{
    acronym: string
    settings?: Settings;
  }>
  statistics: {
    ok?: number
    meh?: number
    miss?: number
    great: number
  }
  beatmap_id: number
  best_id: any
  id: number
  rank: string
  type: string
  user_id: number
  accuracy: number
  build_id: any
  ended_at: string
  has_replay: boolean
  legacy_perfect: any
  legacy_score_id: number
  legacy_total_score: number
  max_combo: number
  passed: boolean
  pp?: number
  ruleset_id: number
  started_at: any
  total_score: number
  replay: boolean
  current_user_attributes: {
    pin: any
  }
  beatmap: {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: any
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: string
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
  }
  beatmapset: {
    artist: string
    artist_unicode: string
    covers: {
      cover: string
      "cover@2x": string
      card: string
      "card@2x": string
      list: string
      "list@2x": string
      slimcover: string
      "slimcover@2x": string
    }
    creator: string
    favourite_count: number
    hype: any
    id: number
    nsfw: boolean
    offset: number
    play_count: number
    preview_url: string
    source: string
    spotlight: boolean
    status: string
    title: string
    title_unicode: string
    track_id?: number
    user_id: number
    video: boolean
  }
  user: {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: any
    username: string
  }
}

export interface Settings {
  seed?: number;
  angle_sharpness?: number;
  drain_rate?: number;
  circle_size?: number;
  approach_rate?: number;
  overall_difficulty?: number;
}


export interface types {
  /**
   * Return list of user scores on a beatmap
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth, mods } = require('osu-api-extended');
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
   * @param {boolean} object.include_fails Only for ```recent``` scores, include scores of failed plays. Set to ```true``` to include them. Defaults to ```false```
   * @param {string} object.mode ```osu``` or ```fruits``` or ```mania``` or ```taiko```
   * @param {number} object.mods Use ```mods.enums``` instead of mods id or name
   * @param {string} object.limit Maximum number of results
   * @param {string} object.offset Result offset for pagination
  */
  (user: number, type: 'recent' | 'best' | 'firsts' | 'pinned', object: { include_fails?: boolean, mode?: 'osu' | 'fruits' | 'mania' | 'taiko', mods?: number, limit?: string, offset?: string, }): Promise<response[]>;
}
