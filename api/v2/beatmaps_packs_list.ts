import { IBeatmapPackType, IDefaultParams, IError } from "../../types";
import { BeatmapsPacksListResponse } from "../../types/v2/beatmaps_packs_list";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = BeatmapsPacksListResponse & IError;


export const beatmaps_packs_list = async (params: {
  type: IBeatmapPackType;
  cursor_string?: string;
}, addons?: IDefaultParams): Promise<Response> => {
  const data = await request(`https://osu.ppy.sh/api/v2/beatmaps/packs`, {
    method: 'GET',
    params,
    addons,
  });

  if (data.error) return handleErrors(data.error);

  return data;
};