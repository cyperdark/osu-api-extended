import { request } from "../../../utility/request";
import { Modes_names } from "../../../types";
import { ScoresDetails } from '../../../types/scores_details';



const name = async (score_id: number): Promise<ScoresDetails> => {
  const data = await request(`https://osu.ppy.sh/api/v2/scores/${score_id}`, {
    method: 'GET',
  });

  return data;
};


export default name;