import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Searches users and wiki pages.',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`\`all\`\`\` or \`\`\`user\`\`\` or \`\`\`wiki_page\`\`\`',
        },
        {
          type: 'string',
          name: 'query',
          optional: true,
          description: 'Search keyword',
        },
        {
          type: 'number',
          name: 'page',
          optional: true,
          description: 'Search result page. Ignored for mode all',
        },
      ],
    }
  ],
};

export interface types {
  (obj: {
    mode?: 'all' | 'user' | 'wiki_page',
    query?: string,
    page?: number
  }): Promise<response>;
};

export interface response {
  user: {
    data: {
      avatar_url: string;
      country_code: string;
      default_group: string;
      id: number;
      is_active: boolean;
      is_bot: boolean;
      is_deleted: boolean;
      is_online: boolean;
      is_supporter: boolean;
      last_visit?: string;
      pm_friends_only: boolean;
      profile_colour?: string;
      username: string;
    }[];
    total: number;
  };
  wiki_page: {
    data: {
      available_locales: string[];
      layout: string;
      locale: string;
      markdown: string;
      path: string;
      subtitle: string;
      tags: [];
      title: string;
    }[];
    total: number;
  };
}



const name: types = async (obj) => {
  const data = await request(`search`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;