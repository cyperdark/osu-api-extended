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
    track_id?: string;
    user_id: number;
    video: boolean;
  }[];
  discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id?: number;
    user_id: number;
    deleted_by_id?: string;
    message_type: string;
    parent_id?: string;
    timestamp?: number;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    last_post_at: string;
    kudosu_denied: boolean;
  }[];
  posts: {
    beatmapset_discussion_id: number;
    created_at: string;
    deleted_at?: string;
    deleted_by_id?: string;
    id: number;
    last_editor_id?: string;
    message: string;
    system: boolean;
    updated_at: string;
    user_id: number;
  }[];
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
  }[];
  cursor: string;
  cursor_string: string;
}


export interface types {
  /**
   * Return posts from beatmap set discussions
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmap_discussions_posts = await v2.beatmap.discussions.posts(object);
   *   console.log(v2_beatmap_discussions_posts);
   * };
   * 
   * main();
   * ```
   * @param {number} object.beatmapset_discussion_id id of beatmap set id
   * @param {number} object.limit Maximum number of results
   * @param {number} object.page Search page
   * @param {string} object.sort ```id_desc``` or ```id_asc```
   * @param {string[]} object.types ```first``` or ```replay``` or ```system```
   * @param {number} object.user id of the user
  */
  (object: {beatmapset_discussion_id?: number, limit?: number, page?: number, sort?: 'id_desc' | 'id_asc' , types?: ['first' | 'replay' | 'system' ], user?: number, }): Promise<response>;
}
