import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of recent user activity',
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      type: 'number',
      name: 'limit',
      optional: true,
      description: 'Maximum number of results',
    },
    {
      type: 'string',
      name: 'offset',
      optional: true,
      description: 'Result offset for pagination',
    },
  ],
};

export interface types {
  (user: number, obj: { limit?: number, offset?: string }): Promise<response[]>;
};

export interface response {
  created_at: string;
  createdAt: string;
  id: number;
  type: string;
  scoreRank: string;
  rank: number;
  mode: string;
  beatmap: {
    title: string;
    url: string;
  };
  user: {
    username: string;
    url: string;
  };
  approval: string;
  beatmapset: {
    title: string;
    url: string;
  };
}


const name: types = async (user, obj = {}) => {
  const data = await request(`users/${user}/recent_activity`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;