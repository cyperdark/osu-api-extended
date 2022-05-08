import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns a list comments and their replies up to 2 levels deep',
  params: [
    {
      type: 'string',
      name: 'commentable_type',
      optional: true,
      description: '\`\`\`news_post\`\`\` or \`\`\`beatmapset\`\`\`',
    },
    {
      type: 'string',
      name: 'commentable_id',
      optional: true,
      description: 'id of the resource to get comments for',
    },
    {
      type: 'number',
      name: 'cursor.id',
      optional: true,
      description: '',
    },
    {
      type: 'string',
      name: 'cursor.created_at',
      optional: true,
      description: '',
    },
    {
      type: 'string',
      name: 'parent_id',
      optional: true,
      description: 'id of the comment parent',
    },
    {
      type: 'string',
      name: 'sort',
      optional: true,
      description: '\`\`\`new\`\`\` or \`\`\`old\`\`\` or \`\`\`top\`\`\`',
    },
  ],
};

export interface types {
  (obj: {
    commentable_type?: 'news_post' | 'beatmapset',
    commentable_id?: number,
    cursor?: {
      id: number;
      created_at: string;
    },
    parent_id?: string,
    sort?: 'new' | 'old' | 'top',
  }): Promise<response>;
};

export interface response {
  comments: {
    id: number;
    parent_id: number;
    user_id: number;
    pinned: boolean;
    replies_count: number;
    votes_count: number;
    commentable_type: string;
    commentable_id: number;
    legacy_name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    edited_at: string;
    edited_by_id: number;
    message: string;
    message_html: string;
  }[];
  has_more: boolean;
  has_more_id: number;
  included_comments: {
    id: number;
    parent_id: number;
    user_id: number;
    pinned: boolean;
    replies_count: number;
    votes_count: number;
    commentable_type: string;
    commentable_id: number;
    legacy_name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    edited_at: string;
    edited_by_id: number;
    message: string;
    message_html: string;
  }[];
  pinned_comments: [];
  user_votes: [];
  user_follow: boolean;
  users: {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: string;
    username: string;
  }[];
  sort: string;
  cursor: {
    created_at: string;
    id: number;
  };
  top_level_count: number;
  total: number;
  commentable_meta?: {
    id: number;
    type: string;
    title: string;
    url: string;
    owner_id: number;
    owner_title: string;
  }[];
};


const name: types = async (obj) => {
  const data = await request(`comments`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;