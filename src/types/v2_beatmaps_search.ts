export interface response {
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
    track_id: number;
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
      max_combo: number;
    }[];
    pack_tags: string[];
  }[];
  search: {
    sort: string;
  };
  recommended_difficulty: number;
  error: string;
  total: number;
  cursor: {
    approved_date: number;
    id: number;
  };
  cursor_string: string;
}


export interface types {
  /**
   * Return list of beatmaps
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmaps_search = await v2.beatmaps.search(object);
   *   console.log(v2_beatmaps_search);
   * };
   * 
   * main();
   * ```
   * @param {string} object.query 
   * @param {string} object.sort 
   * @param {string} object.general 
   * @param {string} object.mode 
   * @param {string} object.section 
   * @param {string} object.genre 
   * @param {string} object.language 
   * @param {string} object.include 
   * @param {string} object.rank 
   * @param {boolean} object.nfsw 
   * @param {string} object.cursor_string 
  */
  (object: {query?: string, sort?: string, general?: 'converts' | 'follows' | 'recommended' | 'featured_artists' , mode?: string, section?: string, genre?: string, language?: string, include?: string, rank?: string, nfsw?: boolean, cursor_string?: string, }): Promise<response[]>;
}
