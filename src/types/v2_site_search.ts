export interface response {
  user: {
    data: {
      avatar_url: string;
      country_code: string;
      default_group: string;
      id: number;
      is_active: boolean;
      is_bot: boolean;
      is_deleted: boolean;
      is_online: boolean;
      is_supporter: boolean;
      last_visit?: string;
      pm_friends_only: boolean;
      profile_colour?: string;
      username: string;
    }[];
    total: number;
  };
  wiki_page: {
    data: {
      available_locales: string[];
      layout: string;
      locale: string;
      markdown: string;
      path: string;
      subtitle: string;
      tags: [];
      title: string;
    }[];
    total: number;
  };
}


export interface types {
  /**
   * Searches users and wiki pages.
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_site_search = await v2.site.search(object);
   *   console.log(v2_site_search);
   * };
   * 
   * main();
   * ```
   * @param {string} object.mode ```all``` or ```user``` or ```wiki_page```
   * @param {string} object.query Search keyword
   * @param {number} object.page Search result page. Ignored for mode all
  */
  (object: {mode?: 'all' | 'user' | 'wiki_page' , query?: string, page?: number, }): Promise<response>;
}
