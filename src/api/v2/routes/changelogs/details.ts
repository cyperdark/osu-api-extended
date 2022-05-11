import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns details of the specified build',
  params: [
    {
      type: 'string',
      name: 'stream',
      optional: false,
      description: '\`\`\`stable40\`\`\` or \`\`\`stable\`\`\` or \`\`\`beta40\`\`\` or \`\`\`cuttingedge\`\`\` or \`\`\`lazer\`\`\` or \`\`\`web\`\`\`',
    },
    {
      type: 'string',
      name: 'build',
      optional: false,
      description: '\`\`\`id\`\`\` or \`\`\`name\`\`\` of the build',
    },
  ],
};

export interface types {
  (stream: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web', build: string): Promise<response>;
};

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
    next: {
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
}


const name: types = async (stream, build) => {
  const data = await request(`changelog/${stream}/${build}`, {
    method: 'GET',
  });

  return data;
};


export default name;