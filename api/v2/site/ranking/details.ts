import { Modes_names, ranking_types, country_codes } from "../../../../types";
import { request } from "../../../../utility/request";
import { RankingDetails } from '../../../../types/ranking_details';



const name = async (mode: Modes_names, type: ranking_types, object?: {
  country?: country_codes,
  "cursor[page]"?: number,
  filter?: 'all' | 'friends',
  spotlight_id?: number,
  variant?: '4k' | '7k',
}): Promise<RankingDetails> => {
  const data = await request(`https://osu.ppy.sh/api/v2/rankings/${mode}/${type}`, {
    method: 'GET',
    params: object,
  });

  return data;
};


export default name;