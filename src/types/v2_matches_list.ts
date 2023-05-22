export interface response {
  matches: {
    id: number;
    start_time: string;
    end_time?: string;
    name: string;
  }[];
  params: {
    limit: number;
    sort: string;
  };
  cursor: {
    match_id: number;
  };
  cursor_string: string;
}


export interface types {
  /**
   * Return array of the matches
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_matches_list = await v2.matches.list();
   *   console.log(v2_matches_list);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response>;
}
