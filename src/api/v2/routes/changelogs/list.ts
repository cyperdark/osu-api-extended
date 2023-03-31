import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns a listing of update streams, builds, and changelog entries',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'from',
          optional: true,
          description: 'Minimum build version',
        },
        {
          type: 'string',
          name: 'to',
          optional: true,
          description: 'Maximum build version',
        },
        {
          type: 'number',
          name: 'max_id',
          optional: true,
          description: 'Maximum build ID',
        },
        {
          type: 'string',
          name: 'stream',
          optional: true,
          description: '\`\`\`stable40\`\`\` or \`\`\`stable\`\`\` or \`\`\`beta40\`\`\` or \`\`\`cuttingedge\`\`\` or \`\`\`lazer\`\`\` or \`\`\`web\`\`\`',
        },
        {
          type: 'string array',
          name: 'message_formats',
          optional: true,
          description: '\`\`\`html\`\`\` or \`\`\`markdown\`\`\`',
        },
      ],
    }
  ],
};

export interface types {
  (obj: {
    from?: string,
    to?: string,
    max_id?: number,
    stream?: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web',
    message_formats?: ['html', 'markdown']
  }): Promise<response>;
};

export interface response {
  streams: {
    id: number;
    name: string;
    display_name: string;
    is_featured: boolean;
    latest_build: {
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
    user_count: number;
  }[];
  builds: {
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
  }[];
  search: {
    stream: string;
    from: string;
    to: string;
    max_id: string;
    limit: number;
  };
}



const name: types = async (obj) => {
  const data = await request(`changelog`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;