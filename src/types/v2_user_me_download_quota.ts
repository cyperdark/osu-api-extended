export interface response {
}


export interface types {
  /**
   * Return user download quota number?
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_user_me_download_quota = await v2.user.me.download.quota();
   *   console.log(v2_user_me_download_quota);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response>;
}
