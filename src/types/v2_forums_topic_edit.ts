export interface response {
  title?: {
    created_at: string;
    deleted_at: string;
    first_post_id: number;
    forum_id: number;
    id: number;
    is_locked: boolean;
    last_post_id: number;
    post_count: number;
    title: string;
    type: string;
    updated_at: string;
    user_id: number;
    poll: string;
  };
  body?: {
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
  };
}


export interface types {
  /**
   * Return topic data and posts list
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_forums_topic_edit = await v2.forums.topic.edit(topic_id, object);
   *   console.log(v2_forums_topic_edit);
   * };
   * 
   * main();
   * ```
   * @param {number} topic_id Topic id
   * @param {string} object.title 
   * @param {string} object.body 
  */
  (topic_id: number, object?: {title?: string, body?: string, }): Promise<response>;
}
