import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return votes (+discussions, users) from beatmap set discussions',
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
      type: 'number',
      name: 'receiver',
      optional: true,
      description: 'id of the user',
    },
    {
      type: 'number',
      name: 'score',
      optional: true,
      description: '\`\`\`1\`\`\` for up vote, \`\`\`-1\`\`\` for down vote',
    },
    {
      type: 'string',
      name: 'sort',
      optional: true,
      description: '\`\`\`id_desc\`\`\` or \`\`\`id_asc\`\`\`',
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
    receiver?: number,
    score?: 1 | -1,
    sort?: 'id_desc' | 'id_asc',
    user?: number,
  }): Promise<response>;
};

export interface response {
  discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id?: number;
    user_id: number;
    deleted_by_id?: string;
    message_type: string;
    parent_id?: string;
    timestamp?: number;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    deleted_at?: string;
    last_post_at: string;
    kudosu_denied: boolean;
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
    last_visit?: string;
    pm_friends_only: boolean;
    profile_colour?: string;
    username: string;
    groups: {
      colour: string;
      has_listing: boolean;
      has_playmodes: boolean;
      id: number;
      identifier: string;
      is_probationary: boolean;
      name: string;
      short_name: string;
      playmodes: string[];
    }[];
  }[];
  votes: {
    beatmapset_discussion_id: number;
    created_at: string;
    id: number;
    score: number;
    updated_at: string;
    user_id: number;
  }[];
  cursor: string;
  cursor_string: string;
}



const name: types = async (obj) => {
  const data = await request(`beatmapsets/discussions/votes`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;