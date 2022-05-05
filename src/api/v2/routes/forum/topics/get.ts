import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (topic: number, obj: object): Promise<{

  }[]>;
};


const name: types = async (topic, obj) => {
  const data = await request(`forums/topics/${topic}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;