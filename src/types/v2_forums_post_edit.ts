export interface response {
  created_at: string;
  deleted_at: string;
  edited_at: string;
  edited_by_id: number;
  forum_id: number;
  id: number;
  topic_id: number;
  user_id: number;
  body: {
    html: string;
    raw: string;
  };
}


export interface types {
  /**
   * 
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_forums_post_edit = await v2.forums.post.edit(post_id, body);
   *   console.log(v2_forums_post_edit);
   * };
   * 
   * main();
   * ```
   * @param {number} post_id Post id
   * @param {number} body Body of the post
  */
  (post_id: number, body: number): Promise<response>;
}
