import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (mode?: 'osu' | 'fruits' | 'mania' | 'taiko', obj?: object): Promise<{

  }[]>;
};


const name: types = async (mode, obj) => {
  const data = await request(`rooms/${mode}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;