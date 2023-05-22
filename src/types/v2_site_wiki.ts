export interface response {
  available_locales: string[];
  layout: string;
  locale: string;
  markdown: string;
  path: string;
  subtitle: string;
  tags: [];
  title: string;
}


export interface types {
  /**
   * Return data about wiki page
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_site_wiki = await v2.site.wiki(language, path);
   *   console.log(v2_site_wiki);
   * };
   * 
   * main();
   * ```
   * @param {string} language Language code of the wiki page
   * @param {string} path The path name of the wiki page
  */
  (language: string, path: string): Promise<response>;
}
