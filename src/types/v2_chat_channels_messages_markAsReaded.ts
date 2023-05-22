export interface response {
}


export interface types {
  /**
   * This endpoint marks the channel as having being read up to the given ```message_id```
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_chat_channels_messages_markAsReaded = await v2.chat.channels.messages.markAsReaded(channel_id, message_id);
   *   console.log(v2_chat_channels_messages_markAsReaded);
   * };
   * 
   * main();
   * ```
   * @param {number} channel_id The ```channel_id``` of the channel to mark as read
   * @param {number} message_id The ```message_id``` of the message to mark as read up to
  */
  (channel_id?: number, message_id?: number): Promise<response[]>;
}
