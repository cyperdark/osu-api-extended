import { IDefaultParams } from "../../types";
import { BeatmapsPacksDetailsResponse } from "../../types/v2/beatmaps_packs_details";
import { request } from "../../utility/request";



const name = async (pack_tag: string, addons: IDefaultParams): Promise<BeatmapsPacksDetailsResponse> => {
  const data = await request(`https://osu.ppy.sh/api/v2/beatmaps/packs/${pack_tag}`, {
    method: 'GET',
    addons,
  });

  return data;
};


export default name;