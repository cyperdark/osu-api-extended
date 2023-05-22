export interface response {
  channel_id: number;
  description: string;
  icon: string;
  moderated: boolean;
  name: string;
  type: string;
  uuid: string;
}


export interface types {
  /**
   * Return list of channels
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_list = await v2.chat.channels.list();
   *   console.log(v2_chat_channels_list);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response>;
}
