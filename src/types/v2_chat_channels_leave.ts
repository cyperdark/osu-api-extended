export interface response {
}


export interface types {
  /**
   * Remove channel by id
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_leave = await v2.chat.channels.leave(channel_id, user_id);
   *   console.log(v2_chat_channels_leave);
   * };
   * 
   * main();
   * ```
   * @param {number} channel_id Channel id
   * @param {number} user_id User id
  */
  (channel_id: number, user_id: number): Promise<response>;
}
