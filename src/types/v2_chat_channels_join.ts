export interface response {
  channel_id: number;
  description: string;
  icon: string;
  moderated: boolean;
  name: string;
  type: string;
  uuid: string;
  current_user_attributes: {
    can_message: boolean;
    can_message_error: string;
    last_read_id: string;
  };
  last_message_id: number;
  last_read_id: string;
  users: [];
}


export interface types {
  /**
   * Join channel by id
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_join = await v2.chat.channels.join();
   *   console.log(v2_chat_channels_join);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response[]>;
}
