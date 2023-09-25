import { request } from "../../../utility/request";
import { gamemode_names } from "../../../types";
import { ScoresDetails } from '../../../types/scores_details';



const name = async (score_id: number, mode: gamemode_names): Promise<ScoresDetails> => {
  if (mode == null)
    throw new Error('Gamemode name not specified');


  const data = await request(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}`, {
    method: 'GET',
  });

  return data;
};


export default name;