import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns details of the specified build',
  params: [
    {
      type: 'string/number',
      name: 'changelog',
      optional: false,
      description: 'Build version, update stream name, or build ID',
    },
    {
      type: 'string',
      name: 'key',
      optional: false,
      description: 'Unset to query by build version or stream name, or \`\`\`id\`\`\` to query by build ID.',
    },
    {
      type: 'string array',
      name: 'message_formats',
      optional: false,
      description: '\`\`\`html\`\`\` or \`\`\`markdown\`\`\`',
    },
  ],
};

export interface types {
  (changelog: string | number, obj: {
    key?: 'id',
    message_formats?: ['html', 'markdown']
  }): Promise<response>;
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
  };
}



const name: types = async (changelog, obj) => {
  const data = await request(`changelog/${changelog}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;