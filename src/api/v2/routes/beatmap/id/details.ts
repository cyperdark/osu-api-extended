import { types } from '../../../../../types/v2_beatmap_id_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return beatmap data of specified beatmap id',
  params: [
    {
      type: 'number',
      name: 'beatmap',
      optional: false,
      description: 'id of the beatmap',
    },
  ],
  return: 'response',
};



const name: types = async (beatmap) => {
  const data = await request(`beatmaps/${beatmap}`, {
    method: 'GET',
  });

  return data;
};


export default name;