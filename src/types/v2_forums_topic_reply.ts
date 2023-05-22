export interface response {
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
   *   const v2_forums_topic_reply = await v2.forums.topic.reply(topic_id, body);
   *   console.log(v2_forums_topic_reply);
   * };
   * 
   * main();
   * ```
   * @param {number} topic_id Topic id
   * @param {number} body Message body
  */
  (topic_id: number, body: number): Promise<response>;
}
