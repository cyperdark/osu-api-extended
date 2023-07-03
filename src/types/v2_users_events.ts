export interface response {
  events: {
    created_at: string;
    createdAt: string;
    id: number;
    type: string;
    scoreRank?: string;
    rank?: number;
    mode?: string;
    beatmap: {
      title: string;
      url: string;
    };
    user: {
      username: string;
      url: string;
    };
    achievement: {
      icon_url: string;
      id: number;
      name: string;
      grouping: string;
      ordering: number;
      slug: string;
      description: string;
      mode: string;
      instructions: string;
    };
  }[];
  cursor: {
    event_id: number;
  };
  cursor_string: string;
}


export interface types {
  /**
   * Return list of events in order of creation time
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_users_events = await v2.users.events(object);
   *   console.log(v2_users_events);
   * };
   * 
   * main();
   * ```
   * @param {string} object.sort ```id_desc``` or ```id_asc```
   * @param {string} object.cursor_string Parameter for pagination
   * @param {string[]} object.type ```achievement``` or ```beatmapPlaycount``` or ```beatmapsetApprove``` or ```beatmapsetDelete``` or ```beatmapsetRevive``` or ```beatmapsetUpdate``` or ```beatmapsetUpload``` or ```rank``` or ```userSupportAgain``` or ```userSupportFirst``` or ```userSupportGift``` or ```usernameChange```
  */
  (object: { sort?: 'id_desc' | 'id_asc', cursor_string?: string, type?: Array<'achievement' | 'beatmapPlaycount' | 'beatmapsetApprove' | 'beatmapsetDelete' | 'beatmapsetRevive' | 'beatmapsetUpdate' | 'beatmapsetUpload' | 'rank' | 'userSupportAgain' | 'userSupportFirst' | 'userSupportGift' | 'usernameChange'>, }): Promise<response>;
}
