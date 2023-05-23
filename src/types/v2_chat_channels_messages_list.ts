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
   * Return chat messages for a specific channel
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_messages_list = await v2.chat.channels.messages.list(channel_id, object);
   *   console.log(v2_chat_channels_messages_list);
   * };
   * 
   * main();
   * ```
   * @param {number} channel_id id of the channel
   * @param {number} object.limit Maximum number of results (Max 50)
   * @param {number} object.since Messages after the specified message id will be returned
   * @param {number} object.until Messages up to but not including the specified message id will be returned
  */
  (channel_id: number, object: {limit?: number, since?: number, until?: number, }): Promise<response[]>;
}
