import { types, response } from '../../../../types/v2_beatmaps_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return array of specified beatmaps (limit 50 beatmaps)',
  params: [
    {
      type: 'number[]',
      name: 'ids',
      optional: false,
      description: 'Array of beatmap ids',
    },
  ],
};



const name: types = async (ids) => {
  const data = await request(`beatmaps`, {
    method: 'GET',
    params: { ids },
  });

  if (data.beatmaps) return data.beatmaps;

  return data;
};


export default name;