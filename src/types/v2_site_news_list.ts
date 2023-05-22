export interface response {
  news_posts: {
    id: number;
    author: string;
    edit_url: string;
    first_image: string;
    published_at: string;
    updated_at: string;
    slug: string;
    title: string;
    preview: string;
  }[];
  news_sidebar: {
    current_year: number;
    news_posts: {
      id: number;
      author: string;
      edit_url: string;
      first_image: string;
      published_at: string;
      updated_at: string;
      slug: string;
      title: string;
    }[];
    years: number[];
  };
  search: {
    limit: number;
    sort: string;
    year: string;
  };
  cursor: {
    published_at: string;
    id: number;
  };
  cursor_string: string;
}


export interface types {
  /**
   * Returns a list of news posts and related metadata
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_site_news_list = await v2.site.news.list(object);
   *   console.log(v2_site_news_list);
   * };
   * 
   * main();
   * ```
   * @param {number} object.limit Maximum number of posts (12 default, 1 minimum, 21 maximum)
   * @param {number} object.year Year to return posts from
   * @param {string} object.cursorPublished Pagination cursorPublished
   * @param {number} object.cursorId Pagination cursorId
  */
  (object: {limit?: number, year?: number, cursorPublished?: string, cursorId?: number, }): Promise<response>;
}
