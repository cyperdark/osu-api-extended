import { BeatmapsEvents } from "../../types/v2/beatmaps_events";
import { IDefaultParams, beatmap_events_types } from "../../types";
import { request } from "../../utility/request";



export const beatmaps_events_list = async (obj: {
  user: string | number,
  types: (beatmap_events_types)[];
  min_date: string;
  max_date: string;
}, addons?: IDefaultParams): Promise<BeatmapsEvents> => {
  let url = 'https://osu.ppy.sh/api/v2/beatmapsets/events';


  const data = await request(url, {
    method: 'GET',
    params: obj,
    addons
  });

  return data;
};