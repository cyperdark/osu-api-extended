export interface response {
  channel_id: number;
  content: number;
  is_action: boolean;
  message_id: number;
  sender_id: number;
  timestamp: string;
  type: string;
  sender: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: string;
    username: string;
  };
}


export interface types {
  /**
   * Send message to chat channel
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_messages_send = await v2.chat.channels.messages.send(channel_id, message, is_action);
   *   console.log(v2_chat_channels_messages_send);
   * };
   * 
   * main();
   * ```
   * @param {number} channel_id The channel_id of the channel to send message to
   * @param {number} message Message to send
   * @param {number} is_action Whether the message is an action
  */
  (channel_id: number, message: number, is_action: number): Promise<response>;
}
