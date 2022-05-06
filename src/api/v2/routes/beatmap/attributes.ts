import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (beatmap_id: number, body: {
    mods?: string[],
    ruleset?: 'osu' | 'fruits' | 'mania' | 'taiko',
    ruleset_id?: number,
  }): Promise<{
    attributes: {
      star_rating: number;
      max_combo: number;
      aim_difficulty: number;
      speed_difficulty: number;
      flashlight_difficulty: number;
      slider_factor: number;
      approach_rate: number;
      overall_difficulty: number;
    };
  }>;
};


const name: types = async (beatmap_id, body) => {
  const data = await request(`beatmaps/${beatmap_id}/attributes`, {
    method: 'POST',
    data: JSON.stringify(body),
  });

  return data;
};


export default name;