export interface response {
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
  bpm: number;
  can_be_hyped: boolean;
  deleted_at: string;
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
}


export interface types {
  /**
   * Return beatmaps list of specified user
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_user_beatmaps_category = await v2.user.beatmaps.category(user, type, object);
   *   console.log(v2_user_beatmaps_category);
   * };
   * 
   * main();
   * ```
   * @param {number} user id of the user
   * @param {string} type ```favourite``` or ```loved``` or ```ranked``` or ```pending``` or ```graveyard```
   * @param {number} object.limit Maximum number of results
   * @param {number} object.offset Result offset for pagination
  */
  (user: number, type: 'favourite' | 'loved' | 'ranked' | 'pending' | 'graveyard' , object: {limit?: number, offset?: number, }): Promise<response[]>;
}
