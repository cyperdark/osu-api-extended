export interface response {
  end_date: string;
  id: number;
  mode_specific: boolean;
  name: string;
  start_date: string;
  type: string;
}


export interface types {
  /**
   * Return list of spotlights
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_site_spotlights_list = await v2.site.spotlights.list();
   *   console.log(v2_site_spotlights_list);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response[]>;
}
