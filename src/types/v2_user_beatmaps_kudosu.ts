export interface response {
  id: number;
  action: string;
  amount: number;
  model: string;
  created_at: string;
  giver: string;
  post: {
    url: string;
    title: string;
  };
  details: {
    event: string;
  };
}


export interface types {
  /**
   * Return list of kudosu actions
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_user_beatmaps_kudosu = await v2.user.beatmaps.kudosu(user, object);
   *   console.log(v2_user_beatmaps_kudosu);
   * };
   * 
   * main();
   * ```
   * @param {number} user id of the user
   * @param {number} object.limit 
   * @param {number} object.offset 
  */
  (user: number, object: {limit?: number, offset?: number, }): Promise<response>;
}
