import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (ids: number[]): Promise<{

  }[]>;
};


const name: types = async (ids) => {
  const data = await request(`notifications/mark-read`, {
    method: 'POST',
    data: JSON.stringify({ ids })
  });

  return data;
};


export default name;