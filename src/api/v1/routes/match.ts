import { namespace, RequestNamepsace } from "../../../utility/request";
import { id as mods_id } from "../../../utility/mods";
import form from "../form/match";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');


export interface types {
  (id: number): Promise<{
    match: {
      id: number;
      name: string;
      time: {
        start: string;
        end: string;
      };
    };
    games: {
      id: number;
      time: {
        start: string;
        end: string;
      };
      beatmap_id: number;
      mode: {
        id: number;
        name: string;
      };
      types: {
        match: string;
        scoring: {
          id: number;
          name: string;
        };
        team: {
          id: number;
          name: string;
        };
      };
      mods: {
        id: number;
        name: string;
      };
      scores: {
        team: {
          id: number;
          name: string;
        };
        slot: number;
        user: {
          id: number;
        };
        score: number;
        combo: {
          max: number;
          perfect: number;
        };
        hits: {
          0: number;
          50: number;
          100: number;
          300: number;
          geki: number;
          katu: number;
        };
        mods: {
          id: number;
          name: string;
        };
      }[];
    }[];
  }>;
};


const name: types = async (id) => {
  const params = { mp: id };

  const data = await request(`get_match`, {
    method: 'GET',
    params: params,
  });

  if (data.match == 0 || !data.match) return null;

  const format = form(data);
  return format;
};


export default name;