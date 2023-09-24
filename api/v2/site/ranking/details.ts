import { gamemode_names, ranking_types, country_codes } from "../../../../utility/types";
import { request } from "../../../../utility/request";



const name = async (mode: gamemode_names, type: ranking_types, object?: {
  country?: country_codes,
  "cursor[page]"?: number,
  filter?: 'all' | 'friends',
  spotlight_id?: number,
  variant?: '4k' | '7k',
}) => {
  const data = await request(`https://osu.ppy.sh/api/v2/rankings/${mode}/${type}`, {
    method: 'GET',
    params: object,
  });

  return data;
};


export default name;