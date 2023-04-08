export interface response {
}


export interface types {
  /**
   * Return beatmaps list of specified user
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_user_beatmaps_category = await v2.user.beatmaps.category(user, type, object);
   *   console.log(v2_user_beatmaps_category);
   * };
   * 
   * main();
   * ```
   * @param {number} user id of the user
   * @param {string} type ```favourite``` or ```loved``` or ```ranked``` or ```pending``` or ```graveyard```
   * @param {number} object.limit 
   * @param {number} object.offset 
  */
  (user: number, type: 'favourite' | 'loved' | 'ranked' | 'pending' | 'graveyard' , object: {limit?: number, offset?: number, }): Promise<response>;
}
