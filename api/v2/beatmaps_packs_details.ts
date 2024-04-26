import { IDefaultParams, IError } from "../../types";
import { BeatmapsPacksDetailsResponse } from "../../types/v2/beatmaps_packs_details";
import { request } from "../../utility/request";



export const beatmap_packs_details = async (pack_tag: string, addons?: IDefaultParams): Promise<BeatmapsPacksDetailsResponse | IError> => {
  if (pack_tag == null) {
    return { error: new Error('Specify beatmap pack tag') };
  };


  const data = await request(`https://osu.ppy.sh/api/v2/beatmaps/packs/${pack_tag}`, {
    method: 'GET',
    addons,
  });


  return data;
};