export interface response {
  streams: {
    id: number;
    name: string;
    display_name: string;
    is_featured: boolean;
    latest_build: {
      created_at: string;
      display_version: number;
      id: number;
      users: number;
      version: number;
      youtube_id: string;
      update_stream: {
        id: number;
        name: string;
        display_name: string;
        is_featured: boolean;
      };
    };
    user_count: number;
  }[];
  builds: {
    created_at: string;
    display_version: number;
    id: number;
    users: number;
    version: number;
    youtube_id?: string;
    update_stream: {
      id: number;
      name: string;
      display_name: string;
      is_featured: boolean;
    };
    changelog_entries: {
      id?: string;
      repository?: string;
      github_pull_request_id?: string;
      github_url?: string;
      url?: string;
      type: string;
      category: string;
      title: string;
      major: boolean;
      created_at: string;
      github_user: {
        id: string;
        display_name: string;
        github_url: string;
        osu_username: string;
        user_id: number;
        user_url: string;
      };
      message?: string;
      message_html?: string;
    }[];
  }[];
  search: {
    stream: string;
    from: string;
    to: string;
    max_id: string;
    limit: number;
  };
}


export interface types {
  /**
   * Returns a listing of update streams, builds, and changelog entries
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_changelogs_list = await v2.changelogs.list(object);
   *   console.log(v2_changelogs_list);
   * };
   * 
   * main();
   * ```
   * @param {string} object.from Minimum build version
   * @param {string} object.to Maximum build version
   * @param {number} object.max_id Maximum build ID
   * @param {string} object.stream ```stable40``` or ```stable``` or ```beta40``` or ```cuttingedge``` or ```lazer``` or ```web```
   * @param {string[]} object.message_formats ```html``` or ```markdown```
  */
  (object: {from?: string, to?: string, max_id?: number, stream?: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web' , message_formats?: Array<'html' | 'markdown' >, }): Promise<response[]>;
}
