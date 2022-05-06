import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: object): Promise<{

  }[]>;
};


const name: types = async (obj) => {
  const data = await request(`chat/channels`, {
    method: 'GET',
  });

  return data;
};


export default name;