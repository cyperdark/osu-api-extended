import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: `This endpoint returns a list of the user's unread notifications. Sorted descending by id with limit of 50.`,
  params: [
    {
      type: 'string',
      name: 'query',
      optional: true,
      description: 'Maximum \`\`\`id\`\`\` fetched. Can be used to load earlier notifications. Defaults to no limit (fetch latest notifications)',
    },
  ],
};

export interface types {
  (max_id: number): Promise<response>;
};

export interface response {
  notifications: {
    id: number;
    name: string;
    created_at: string;
    object_type: string;
    object_id: number;
    source_user_id: number;
    is_read: boolean;
    details: {
      type: string;
      title: string;
      username: string;
      cover_url: string;
      beatmapset_id: number;
      title_unicode: string;
    };
  }[];
  stacks: {
    category: string;
    cursor: {
      id: number;
    };
    name: string;
    object_type: string;
    object_id: number;
    total: number;
  }[];
  timestamp: string;
  types: {
    cursor: {
      id: number;
      type: string;
    };
    name: string;
    total: number;
  }[];
  notification_endpoint: string;
};


const name: types = async (max_id) => {
  const data = await request(`notifications`, {
    method: 'GET',
    params: { max_id },
  });

  return data;
};


export default name;