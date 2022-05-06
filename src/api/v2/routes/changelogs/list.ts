import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: {
    from?: string,
    to?: string,
    max_id?: number,
    stream?: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web',
    message_formats?: ['html', 'markdown']
  }): Promise<{
    streams: {
      id: number;
      name: string;
      display_name: string;
      is_featured: boolean;
      latest_build: {
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
      user_count: number;
    }[];
    builds: {
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
    }[];
    search: {
      stream: string;
      from: number;
      to: number;
      max_id: number;
      limit: number;
    };
  }>;
};


const name: types = async (obj) => {
  const data = await request(`changelog`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;