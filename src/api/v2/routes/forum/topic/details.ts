import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return topic data and posts list',
  params: [
    {
      type: 'string',
      name: 'cursor_string',
      optional: true,
      description: 'Parameter for pagination',
    },
    {
      type: 'string',
      name: 'sort',
      optional: true,
      description: '\`\`\`id_asc\`\`\` or \`\`\`id_desc\`\`\`',
    },
    {
      type: 'number',
      name: 'limit',
      optional: true,
      description: 'Maximum number of posts to be returned (20 default, 50 at most)',
    },
    {
      type: 'string',
      name: 'start',
      optional: true,
      description: 'First post id to be returned with sort set to id_asc. This parameter is ignored if cursor_string is specified',
    },
    {
      type: 'string',
      name: 'end',
      optional: true,
      description: 'Last post id to be returned with sort set to id_desc. This parameter is ignored if cursor_string is specified.',
    },
  ],
};

export interface types {
  (topic: number, obj: {
    cursor_string?: string,
    sort?: 'id_asc' | 'id_desc',
    limit?: number,
    start?: string,
    end?: string,
  }): Promise<response>;
};

export interface response {
  posts: {
    created_at: string;
    deleted_at: string;
    edited_at: string;
    edited_by_id: number;
    forum_id: number;
    id: number;
    topic_id: number;
    user_id: number;
    body: {
      html: string;
      raw: string;
    };
  }[];
  search: {
    limit: number;
    sort: string;
  };
  topic: {
    created_at: string;
    deleted_at: string;
    first_post_id: number;
    forum_id: number;
    id: number;
    is_locked: boolean;
    last_post_id: number;
    post_count: number;
    title: string;
    type: string;
    updated_at: string;
    user_id: number;
    poll?: {
      allow_vote_change: boolean;
      ended_at: string;
      hide_incomplete_results: boolean;
      last_vote_at: string;
      max_votes: number;
      started_at: string;
      title: {
        bbcode: string;
        html: string;
      };
      total_vote_count: number;
      options: {
        id: number;
        text: {
          bbcode: string;
          html: string;
        };
        vote_count: number;
      }[];
    } | null;
  };
  cursor: {
    id: number;
  };
  cursor_string: string;
};


const name: types = async (topic, obj) => {
  const data = await request(`forums/topics/${topic}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;