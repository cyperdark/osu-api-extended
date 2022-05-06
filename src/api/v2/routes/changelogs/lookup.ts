import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (changelog: string | number, obj: {
    key?: string,
    message_formats?: ['html', 'markdown']
  }): Promise<{
    id: number;
    version: string;
    display_version: string;
    users: number;
    created_at: string;
    update_stream: {
      id: number;
      name: string;
      display_name: string;
      is_featured: boolean;
    };
    changelog_entries: {
      id: number;
      repository: string;
      github_pull_request_id: number;
      github_url: string;
      url: string;
      type: string;
      category: string;
      title: string;
      major: boolean;
      created_at: string;
      github_user: {
        id: number;
        display_name: string;
        github_url: string;
        osu_username: string;
        user_id: number;
        user_url: string;
      };
      message: string;
      message_html: string;
    }[];
    versions: {
      previous: {
        id: number;
        version: string;
        display_version: string;
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
  }>;
};


const name: types = async (changelog, obj) => {
  const data = await request(`changelog/${changelog}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;