export interface response {
}


export interface types {
  /**
   * This endpoint allows you to mark notifications read
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_notifications_markAsReaded = await v2.notifications.markAsReaded(ids);
   *   console.log(v2_notifications_markAsReaded);
   * };
   * 
   * main();
   * ```
   * @param {number array} ids ```id``` of notifications to be marked as read
  */
  (ids: 'id of notifications to be marked as read' ): Promise<response[]>;
}
