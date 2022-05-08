import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of kudosu actions',
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
      type: 'number',
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
}


const name: types = async (user, obj) => {
  const data = await request(`users/${user}/kudosu`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;