export interface response {
  posts: {
    created_at: string;
    deleted_at?: string;
    edited_at?: string;
    edited_by_id?: number;
    forum_id: number;
    id: number;
    topic_id: number;
    user_id: number;
    body: {
      html: string;
      raw: string;
    };
  }[];
  search: {
    limit: number;
    sort: string;
  };
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
  cursor: {
    id: number;
  };
  cursor_string: string;
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
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_forums_topic_details = await v2.forums.topic.details(topic, object);
   *   console.log(v2_forums_topic_details);
   * };
   * 
   * main();
   * ```
   * @param {number} topic Topic id
   * @param {string} object.cursor_string 
   * @param {string} object.sort 
   * @param {number} object.limit 
   * @param {string} object.start 
   * @param {string} object.end 
  */
  (topic: number, object: {cursor_string?: string, sort?: 'id_asc' | 'id_desc' , limit?: number, start?: string, end?: string, }): Promise<response[]>;
}
