export interface response {
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
  versions: {
    previous: {
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
  };
  error: string;
}


export interface types {
  /**
   * Returns details of the specified build
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_changelogs_lookup = await v2.changelogs.lookup(changelog, object);
   *   console.log(v2_changelogs_lookup);
   * };
   * 
   * main();
   * ```
   * @param {string|number} changelog Build version, update stream name, or build ID
   * @param {string} object.key Unset to query by build version or stream name, or ```id``` to query by build ID.
   * @param {string[]} object.message_formats ```html``` or ```markdown```
  */
  (changelog: string | number, object: {key: string, message_formats: Array<'html' | 'markdown' >, }): Promise<response[]>;
}
