import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (beatmapset_id: number): Promise<{

  }[]>;
};


const name: types = async (beatmapset_id) => {
  const data = await request(`beatmapsets/${beatmapset_id}/favourites`, {
    method: 'POST',
  });

  return data;
};


export default name;