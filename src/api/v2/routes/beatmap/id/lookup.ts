import { types } from '../../../../../types/v2_beatmap_id_lookup';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return data of the specified beatmap id',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'id',
          optional: true,
          description: 'id of the beatmap',
        },
        {
          type: 'string',
          name: 'checksum',
          optional: true,
          description: 'md5 of the beatmap file',
        },
        {
          type: 'string',
          name: 'filename',
          optional: true,
          description: 'file name of the beatmap',
        },
      ],
    },
  ],
};



const name: types = async (object) => {
  const data = await request(`beatmaps/lookup`, {
    method: 'GET',
    params: {
      checksum: object.checksum,
      filename: object.filename,
      id: object.id,
    },
  });

  return data;
};


export default name;