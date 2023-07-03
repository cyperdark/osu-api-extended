export interface response {
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
    checksum?: string;
  }[];
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
  }[];
  discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id?: string;
    user_id: number;
    deleted_by_id?: string;
    message_type: string;
    parent_id?: string;
    timestamp?: string;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    last_post_at: string;
    kudosu_denied: boolean;
    current_user_attributes: {
      vote_score: number;
      can_moderate_kudosu: boolean;
      can_resolve: boolean;
      can_reopen: boolean;
      can_destroy: boolean;
    };
    starting_post: {
      beatmapset_discussion_id: number;
      created_at: string;
      deleted_at: string;
      deleted_by_id: string;
      id: number;
      last_editor_id: string;
      message: string;
      system: boolean;
      updated_at: string;
      user_id: number;
    };
  }[];
  included_discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id: string;
    user_id: number;
    deleted_by_id: string;
    message_type: string;
    parent_id: number;
    timestamp: string;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    last_post_at: string;
    kudosu_denied: boolean;
    current_user_attributes: {
      vote_score: number;
      can_moderate_kudosu: boolean;
      can_resolve: boolean;
      can_reopen: boolean;
      can_destroy: boolean;
    };
    starting_post: {
      beatmapset_discussion_id: number;
      created_at: string;
      deleted_at: string;
      deleted_by_id: string;
      id: number;
      last_editor_id: string;
      message: string;
      system: boolean;
      updated_at: string;
      user_id: number;
    };
  }[];
  reviews_config: {
    max_blocks: number;
  };
  users: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit?: string;
    pm_friends_only: boolean;
    profile_colour?: string;
    username: string;
    groups: {
      colour: string;
      has_listing: boolean;
      has_playmodes: boolean;
      id: number;
      identifier: string;
      is_probationary: boolean;
      name: string;
      short_name: string;
      playmodes: string[];
    }[];
  }[];
  cursor: {
    page: number;
    limit: number;
  };
  cursor_string: string;
}


export interface types {
  /**
   * Return details of beatmap discussion
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmap_discussions_details = await v2.beatmap.discussions.details(object);
   *   console.log(v2_beatmap_discussions_details);
   * };
   * 
   * main();
   * ```
   * @param {number} object.beatmap_id beatmap id
   * @param {number} object.beatmapset_id beatmapset id
   * @param {string} object.beatmapset_status ```all``` or ```ranked``` or ```qualified``` or ```disqualified``` or ```never_qualified``` or ```loved```
   * @param {number} object.limit Maximum number of results
   * @param {string[]} object.message_types ```suggestion``` or ```problem``` or ```mapper_note``` or ```praise``` or ```hype``` or ```review``` or ```all```
   * @param {boolean} object.only_unresolved ```true``` or ```false```
   * @param {number} object.page Search result page
   * @param {string} object.sort ```id_desc``` or ```id_asc```
   * @param {number} object.user id of the user
  */
  (object: {beatmap_id?: number, beatmapset_id?: number, beatmapset_status?: 'all' | 'ranked' | 'qualified' | 'disqualified' | 'never_qualified' | 'loved' , limit?: number, message_types?: Array<'suggestion' | 'problem' | 'mapper_note' | 'praise' | 'hype' | 'review' | 'all' >, only_unresolved?: 'true' | 'false' , page?: number, sort?: 'id_desc' | 'id_asc' , user?: number, }): Promise<response[]>;
}
