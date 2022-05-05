import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (beatmap_id: number): Promise<{

  }[]>;
};


const name: types = async (beatmap_id) => {
  const data = await request(`beatmapsets/lookup`, {
    method: 'GET',
    params: {
      beatmap_id: beatmap_id,
    },
  });

  return data;
};


export default name;