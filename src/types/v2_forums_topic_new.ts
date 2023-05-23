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
   * @param {string} object.title Title of the topic
   * @param {string} object.body Body of the topic
   * @param {string} poll.title Title of the poll.
   * @param {string[]} poll.options Newline-separated list of voting options. BBCode is supported.
   * @param {boolean} poll.hide_results Hide results of the poll until voting period ends
   * @param {number} poll.length_days Number of days for voting period. 0 means the voting will never ends (default: 0). This parameter is required if hide_results option is enabled.
   * @param {number} poll.max_options This is the number of options each user may select when voting.
   * @param {boolean} poll.vote_change Enable this to allow user to change their votes (default: false).
  */
  (forum_id: number, object: {title: string, body: string, }, poll: {title: string, options: string[], hide_results?: boolean, length_days?: number, max_options?: number, vote_change?: boolean, }): Promise<response>;
}
