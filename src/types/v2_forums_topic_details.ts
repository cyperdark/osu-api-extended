export interface response {
  posts: {
    created_at: string;
    deleted_at?: string;
    edited_at?: string;
    edited_by_id?: string;
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
    poll: {
      allow_vote_change: boolean;
      ended_at: string;
      hide_incomplete_results: boolean;
      last_vote_at: string;
      max_votes: number;
      started_at: string;
      title: {
        bbcode: string;
        html: string;
      };
      total_vote_count: number;
      options: {
        id: number;
        text: {
          bbcode: string;
          html: string;
        };
        vote_count: number;
      }[];
    };
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
   * @param {string} object.cursor_string Parameter for pagination
   * @param {string} object.sort ```id_asc``` or ```id_desc```
   * @param {number} object.limit Maximum number of posts to be returned (20 default, 50 at most)
   * @param {string} object.start First post id to be returned with sort set to id_asc. This parameter is ignored if cursor_string is specified
   * @param {string} object.end Last post id to be returned with sort set to id_desc. This parameter is ignored if cursor_string is specified.
  */
  (topic: number, object: {cursor_string?: string, sort?: 'id_asc' | 'id_desc' , limit?: number, start?: string, end?: string, }): Promise<response[]>;
}
