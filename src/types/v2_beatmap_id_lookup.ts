export interface response {
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
    ratings: number[];
  };
  failtimes: {
    fail: number[];
    exit: number[];
  };
  max_combo: number;
}


export interface types {
  /**
   * Return data of the specified beatmap id
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmap_id_lookup = await v2.beatmap.id.lookup(object);
   *   console.log(v2_beatmap_id_lookup);
   * };
   * 
   * main();
   * ```
   * @param {number} object.id id of the beatmap
   * @param {string} object.checksum md5 of the beatmap file
   * @param {string} object.filename file name of the beatmap
  */
  (object: {id?: number, checksum?: string, filename?: string, }): Promise<response[]>;
}
