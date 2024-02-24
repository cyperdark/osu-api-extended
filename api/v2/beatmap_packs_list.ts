import { IBeatmapPackType, IDefaultParams } from "../../types";
import { BeatmapsPacksListResponse } from "../../types/v2/beatmaps_packs_list";
import { request } from "../../utility/request";



const name = async (params: {
  type: IBeatmapPackType;
  cursor_string?: string;
}, addons: IDefaultParams): Promise<BeatmapsPacksListResponse> => {
  const data = await request(`https://osu.ppy.sh/api/v2/beatmaps/packs`, {
    method: 'GET',
    params,
    addons,
  });

  return data;
};


export default name;