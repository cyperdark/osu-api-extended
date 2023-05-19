export interface response {
}


export interface types {
  /**
   * Download beatmap set to specified directory
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_beatmap_set_download = await v2.beatmap.set.download(beatmapset, file_path, callback);
   *   console.log(v2_beatmap_set_download);
   * };
   * 
   * main();
   * ```
   * @param {number} beatmapset id of the beatmap set
   * @param {string} file_path path to file with their name and extension
   * @param {function} callback function which is will be triggered on downloading progress
  */
  (beatmapset: number, file_path: string, callback?: Function): Promise<string>;
}
