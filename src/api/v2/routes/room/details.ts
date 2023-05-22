import { types } from "../../../../types/v2_room_details"; 
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: '',
  params: [
    {
      type: 'number',
      name: 'room_id',
      description: 'Id of the room',
    },
  ],
};


const name: types = async (room_id) => {
  const data = await request(`rooms/${room_id}`, {
    method: 'GET',
    // params: obj,
  });

  return data;
};


export default name;