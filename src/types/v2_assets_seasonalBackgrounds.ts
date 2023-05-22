export interface response {
  ends_at: string;
  backgrounds: {
    url: string;
    user: {
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
  }[];
}


export interface types {
  /**
   * Return array of backgrounds
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_assets_seasonalBackgrounds = await v2.assets.seasonalBackgrounds();
   *   console.log(v2_assets_seasonalBackgrounds);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response[]>;
}
