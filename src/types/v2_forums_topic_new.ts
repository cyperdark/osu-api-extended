export interface response {
  topic: {
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
  post: {
    created_at: string;
    deleted_at: string;
    edited_at: string;
    edited_by_id: string;
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
   * Edit your topic and post from the forum
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_forums_topic_new = await v2.forums.topic.new(forum_id, object, poll);
   *   console.log(v2_forums_topic_new);
   * };
   * 
   * main();
   * ```
   * @param {number} forum_id Forum id
   * @param {string} object.title 
   * @param {string} object.body 
   * @param {string} poll.title 
   * @param {string[]} poll.options 
   * @param {boolean} poll.hide_results 
   * @param {number} poll.length_days 
   * @param {number} poll.max_options 
   * @param {boolean} poll.vote_change 
  */
  (forum_id: number, object: {title: string, body: string, }, poll?: {title: string, options: string[], hide_results?: boolean, length_days?: number, max_options?: number, vote_change?: boolean, }): Promise<response>;
}
