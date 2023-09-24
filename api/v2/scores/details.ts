import { request } from "../../../utility/request";
import { gamemode_names } from "../../../types";



const name = async (score_id: number, mode: gamemode_names) => {
  if (mode == null)
    throw new Error('Gamemode name not specified');


  const data = await request(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}`, {
    method: 'GET',
  });

  return data;
};


export default name;