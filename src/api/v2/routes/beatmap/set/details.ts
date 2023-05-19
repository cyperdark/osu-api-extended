import { types } from '../../../../../types/v2_beatmap_set_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return beatmap data of specified beatmap set id',
  params: [
    {
      type: 'string',
      name: 'beatmapset',
      optional: false,
      description: 'Beatmap set id',
    },
  ],
  return: 'response',
};



const name: types = async (beatmapset) => {
  const data = await request(`beatmapsets/${beatmapset}`, {
    method: 'GET',
  });

  return data;
};


export default name;