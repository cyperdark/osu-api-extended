export interface response {
}


export interface types {
  /**
   * Download score replay file
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_scores_download = await v2.scores.download(score_id, mode, file_path);
   *   console.log(v2_scores_download);
   * };
   * 
   * main();
   * ```
   * @param {number} score_id id of the score
   * @param {string} mode ```osu``` or ```fruits``` or ```mania``` or ```taiko```
   * @param {string} file_path File path with ```.osr``` at the end
  */
  (score_id: number, mode: 'osu' | 'fruits' | 'mania' | 'taiko' , file_path: 'File path with .osr at the end' ): Promise<string>;
}
