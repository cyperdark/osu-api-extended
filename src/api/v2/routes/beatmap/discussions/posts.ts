import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return posts from beatmap set discussions',
  params: [
    {
      type: 'number',
      name: 'beatmapset_discussion_id',
      optional: true,
      description: 'id of beatmap set id',
    },
    {
      type: 'number',
      name: 'limit',
      optional: true,
      description: 'Maximum number of results',
    },
    {
      type: 'number',
      name: 'page',
      optional: true,
      description: 'Search page',
    },
    {
      type: 'string',
      name: 'sort',
      optional: true,
      description: '\`\`\`id_desc\`\`\` or \`\`\`id_asc\`\`\`',
    },
    {
      type: 'string array',
      name: 'types',
      optional: true,
      description: '\`\`\`first\`\`\` or \`\`\`replay\`\`\` or \`\`\`system\`\`\`',
    },
    {
      type: 'number',
      name: 'user',
      optional: true,
      description: 'id of the user',
    },
  ],
};

export interface types {
  (obj: {
    beatmapset_discussion_id?: number,
    limit?: number,
    page?: number,
    sort?: 'id_desc' | 'id_asc',
    types?: ['first' | 'replay' | 'system'],
    user?: number,
    // with_deleted: number,
  }): Promise<response>;
};

export interface response {
  beatmapsets: {
    artist: string;
    artist_unicode: string;
    covers: {
      cover: string;
      'cover@2x': string;
      card: string;
      'card@2x': string;
      list: string;
      'list@2x': string;
      slimcover: string;
      'slimcover@2x': string;
    };
    creator: string;
    favourite_count: number;
    hype: {
      current: number;
      required: number;
    };
    id: number;
    nsfw: boolean;
    offset: number;
    play_count: number;
    preview_url: string;
    source: string;
    status: string;
    title: string;
    title_unicode: string;
    user_id: number;
    video: boolean;
  }[];
  discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id: number;
    user_id: number;
    message_type: string;
    timestamp: number;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    last_post_at: string;
    kudosu_denied: boolean;
  }[];
  posts: {
    beatmapset_discussion_id: number;
    created_at: string;
    id: number;
    message: string;
    system: boolean;
    updated_at: string;
    user_id: number;
  }[];
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
  cursor: {
    page: number;
    limit: number;
  };
  cursor_string: string;
};


const name: types = async (obj) => {
  const data = await request(`beatmapsets/discussions/posts`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;