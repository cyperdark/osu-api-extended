import { BeatmapsEvents } from "../../../types/v2/beatmaps_events";
import { beatmap_events_types } from "../../../types";
import { request } from "../../../utility/request";



const name = async (obj: {
  user: string | number,
  types: (beatmap_events_types)[];
  min_date: string;
  max_date: string;
}): Promise<BeatmapsEvents> => {
  let url = 'https://osu.ppy.sh/api/v2/beatmapsets/events';


  const data = await request(url, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;