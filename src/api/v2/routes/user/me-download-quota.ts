import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (): Promise<{

  }>;
};


const name: types = async () => {
  const data = await request(`me/download-quota-check`, {
    method: 'GET',
  });

  return data;
};


export default name;