export interface response {
  channel: {
    channel_id: number;
    description: string;
    icon: string;
    moderated: boolean;
    name: string;
    type: string;
    uuid: string;
    last_message_id: number;
    users: number[];
  };
  message: {
    channel_id: number;
    content: string;
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
  };
  new_channel_id: number;
}


export interface types {
  /**
   * Send new message to user
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   
   *
   *   const v2_chat_new = await v2.chat.new(target_id, message, is_action, uuid);
   *   console.log(v2_chat_new);
   * };
   * 
   * main();
   * ```
   * @param {string} target_id User id to start PM with
   * @param {string} message message to send
   * @param {boolean} is_action whether the message is an action
   * @param {string} uuid client-side message identifier which will be sent back in response and websocket json
  */
  (target_id: string, message: string, is_action?: boolean, uuid?: string): Promise<response>;
}
