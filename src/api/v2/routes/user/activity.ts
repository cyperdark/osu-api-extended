import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (user: number, obj: { limit?: number, offset?: string }): Promise<{
    created_at: string;
    createdAt: string;
    id: number;
    type: string;
    scoreRank?: string;
    rank?: number;
    mode?: string;
    beatmap?: {
      title: string;
      url: string;
    };
    user: {
      username: string;
      url: string;
    };
    approval?: string;
    beatmapset?: {
      title: string;
      url: string;
    };
  }[]>;
};


const name: types = async (user, obj = {}) => {
  const data = await request(`users/${user}/recent_activity`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;