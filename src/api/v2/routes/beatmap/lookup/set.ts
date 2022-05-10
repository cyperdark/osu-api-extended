import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return details about beatmapset for specified beatmap id',
  params: [
    {
      type: 'number',
      name: 'beatmap_id',
      optional: true,
      description: 'id of the beatmap',
    },
  ],
};

export interface types {
  (beatmap_id: number): Promise<response[]>;
};

export interface response {
  error: string;
}



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