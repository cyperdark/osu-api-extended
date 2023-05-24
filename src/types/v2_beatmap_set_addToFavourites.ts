export interface response {
  favourite_count: number;
}


export interface types {
  /**
   * Added specified beatmapset to favourite list
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_beatmap_set_addToFavourites = await v2.beatmap.set.addToFavourites(beatmapset_id, action);
   *   console.log(v2_beatmap_set_addToFavourites);
   * };
   * 
   * main();
   * ```
   * @param {number} beatmapset_id id of the beatmap set
   * @param {boolean} action true/false
  */
  (beatmapset_id: number, action: boolean): Promise<response>;
}
