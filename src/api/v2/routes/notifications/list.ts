import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: object): Promise<{
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
  }>;
};


const name: types = async (obj) => {
  const data = await request(`notifications`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;