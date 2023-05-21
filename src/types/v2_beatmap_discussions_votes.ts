export interface response {
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
  votes: {
    beatmapset_discussion_id: number;
    created_at: string;
    id: number;
    score: number;
    updated_at: string;
    user_id: number;
  }[];
  cursor: string;
  cursor_string: string;
}


export interface types {
  /**
   * Return votes (+discussions, users) from beatmap set discussions
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmap_discussions_votes = await v2.beatmap.discussions.votes(object);
   *   console.log(v2_beatmap_discussions_votes);
   * };
   * 
   * main();
   * ```
   * @param {number} object.beatmapset_discussion_id 
   * @param {number} object.limit 
   * @param {number} object.page 
   * @param {number} object.receiver 
   * @param {number} object.score 
   * @param {string} object.sort 
   * @param {number} object.user 
  */
  (object: {beatmapset_discussion_id?: number, limit?: number, page?: number, receiver?: number, score?: '1 for up vote, -1 for down vote' , sort?: 'id_desc' | 'id_asc' , user?: number, }): Promise<response[]>;
}
