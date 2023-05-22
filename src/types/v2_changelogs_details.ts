export interface response {
  id: number;
  version: number;
  display_version: number;
  users: number;
  created_at: string;
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
    next: {
      id: number;
      version: number;
      display_version: number;
      users: number;
      created_at: string;
      update_stream: {
        id: number;
        name: string;
        display_name: string;
        is_featured: boolean;
      };
    };
    previous: {
      id: number;
      version: number;
      display_version: number;
      users: number;
      created_at: string;
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
   *   const v2_changelogs_details = await v2.changelogs.details(stream, build);
   *   console.log(v2_changelogs_details);
   * };
   * 
   * main();
   * ```
   * @param {string} stream ```stable40``` or ```stable``` or ```beta40``` or ```cuttingedge``` or ```lazer``` or ```web```
   * @param {string} build ```id``` or ```name``` of the build
  */
  (stream: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web' , build: string): Promise<response[]>;
}
