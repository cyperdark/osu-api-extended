export interface response {
  created_at: string;
  createdAt: string;
  id: number;
  type: string;
  scoreRank: string;
  rank: number;
  mode: string;
  beatmap: {
    title: string;
    url: string;
  };
  user: {
    username: string;
    url: string;
  };
  beatmapset: {
    title: string;
    url: string;
  };
  achievement: {
    icon_url: string;
    id: number;
    name: string;
    grouping: string;
    ordering: number;
    slug: string;
    description: string;
    mode: string;
    instructions: string;
  };
}


export interface types {
  /**
   * Return list of recent user activity
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_user_activity = await v2.user.activity(user, object);
   *   console.log(v2_user_activity);
   * };
   * 
   * main();
   * ```
   * @param {number} user id of the user
   * @param {number} object.limit Maximum number of results
   * @param {string} object.offset Result offset for pagination
  */
  (user: number, object: {limit?: number, offset?: string, }): Promise<response[]>;
}
