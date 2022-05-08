import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return array of the matches',
  params: [

  ],
};

export interface types {
  (): Promise<response>;
};

export interface response {
  cursor: {
    match_id: number;
  };
  matches: {
    id: number;
    start_time: string;
    end_time: string;
    name: string;
  }[];
  params: {
    limit: number;
    sort: string;
  };
};


const name: types = async () => {
  const data = await request(`matches`, {
    method: 'GET',
  });

  return data;
};


export default name;