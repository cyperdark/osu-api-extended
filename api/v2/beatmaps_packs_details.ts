import { IDefaultParams, IError } from "../../types";
import { BeatmapsPacksDetailsResponse } from "../../types/v2/beatmaps_packs_details";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = BeatmapsPacksDetailsResponse & IError;


export const beatmap_packs_details = async (pack_tag: string, addons?: IDefaultParams): Promise<Response> => {
  if (pack_tag == null) {
    return handleErrors('Specify beatmap pack tag') as Response;
  };


  const data = await request(`https://osu.ppy.sh/api/v2/beatmaps/packs/${pack_tag}`, {
    method: 'GET',
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};