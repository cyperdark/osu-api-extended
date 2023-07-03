export interface response {
  presence: {
    channel_id: number;
    description: string;
    icon: string;
    message_length_limit: number;
    moderated: boolean;
    name: string;
    type: string;
    uuid?: string;
    current_user_attributes: {
      can_message: boolean;
      can_message_error: string;
      last_read_id: number;
    };
    last_message_id: number;
    last_read_id?: number;
    users: number[];
  }[];
  silences: {
    id: number;
    user_id: number;
  }[];
  messages: [];
}


export interface types {
  /**
   * This endpoint returns new messages since the given message_id along with updated channel 'presence' data.
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_updates = await v2.chat.updates(object);
   *   console.log(v2_chat_updates);
   * };
   * 
   * main();
   * ```
   * @param {number} object.history_since UserSilence after the specified id to return
   * @param {string[]} object.includes ```presence```, ```messages```, ```silences```
   * @param {number} object.since Messages after the specified message_id to return
  */
  (object: {history_since?: number, includes?: Array<'presence, messages, silences' >, since: number, }): Promise<response>;
}
