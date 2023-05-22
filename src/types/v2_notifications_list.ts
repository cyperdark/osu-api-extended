export interface response {
  notifications: {
    id: number;
    name: string;
    created_at: string;
    object_type: string;
    object_id: number;
    source_user_id: number;
    is_read: boolean;
    details: {
      title: string;
      username: string;
      cover_url: string;
      beatmapset_id: number;
      title_unicode: string;
      type: string;
      post_id: number;
    };
  }[];
  stacks: {
    category: string;
    cursor?: string;
    name: string;
    object_type: string;
    object_id: number;
    total: number;
  }[];
  timestamp: string;
  types: {
    cursor: {
      id: number;
      type: string;
    };
    name: string;
    total: number;
  }[];
  notification_endpoint: string;
}


export interface types {
  /**
   * This endpoint returns a list of the user's unread notifications. Sorted descending by id with limit of 50.
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_notifications_list = await v2.notifications.list(max_id);
   *   console.log(v2_notifications_list);
   * };
   * 
   * main();
   * ```
   * @param {string} max_id Maximum ```id``` fetched. Can be used to load earlier notifications. Defaults to no limit (fetch latest notifications)
  */
  (max_id?: string): Promise<response>;
}
