export interface response {
  channel: {
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
      last_read_id: number;
    };
    last_message_id: number;
    last_read_id: number;
    users: [];
  };
  users: [];
}


export interface types {
  /**
   * Return details about specified channel (only channel that you joined to)
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_details = await v2.chat.channels.details(channel);
   *   console.log(v2_chat_channels_details);
   * };
   * 
   * main();
   * ```
   * @param {number} channel id of the channel
  */
  (channel?: number): Promise<response>;
}
