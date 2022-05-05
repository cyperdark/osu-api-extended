import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (user: number, obj: { limit?: number, offset?: string }): Promise<{
    id: number;
    action: string;
    amount: number;
    model: string;
    created_at: string;
    post: {
      url: string;
      title: string;
    };
    details: {
      event: string;
    };
  }[]>;
};


const name: types = async (user, obj) => {
  const data = await request(`users/${user}/kudosu`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;