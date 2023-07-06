import { types } from "../../../../types/v2_room_leaderboard";
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return leaderboard of room',
  params: [
    {
      type: 'number',
      name: 'room_id',
      description: 'Id of the room',
    },
  ],
};


const name: types = async (room_id) => {
  const data = await request(`rooms/${room_id}/leaderboard`, {
    method: 'GET',
  });

  return data;
};


export default name;