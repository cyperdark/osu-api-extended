import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (): Promise<{
    spotlights: {
      end_date: string;
      id: number;
      mode_specific: boolean;
      name: string;
      start_date: string;
      type: string;
    }[];
  }>;
};


const name: types = async () => {
  const data = await request(`spotlights`, {
    method: 'GET',
  });

  return data;
};


export default name;