export interface response {
  id: number;
  author: string;
  edit_url: string;
  first_image: string;
  published_at: string;
  updated_at: string;
  slug: string;
  title: string;
  content: string;
  navigation: {
    newer: {
      id: number;
      author: string;
      edit_url: string;
      first_image: string;
      published_at: string;
      updated_at: string;
      slug: string;
      title: string;
    };
    older: {
      id: number;
      author: string;
      edit_url: string;
      first_image: string;
      published_at: string;
      updated_at: string;
      slug: string;
      title: string;
    };
  };
}


export interface types {
  /**
   * Returns details of the specified news post
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_site_news_details = await v2.site.news.details(news, key);
   *   console.log(v2_site_news_details);
   * };
   * 
   * main();
   * ```
   * @param {string | number} news News post slug or ID
   * @param {string} key Unset to query by slug, or id to query by ID
  */
  (news: string | number, key: string): Promise<response>;
}
