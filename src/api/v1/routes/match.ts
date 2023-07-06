import { namespace, RequestNamespace } from "../../../utility/request";
import { id as mods_id } from "../../../utility/mods";
import form from "../form/match";

const request: RequestNamespace = namespace('https://osu.ppy.sh/api/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return match details',
  params: [
    {
      type: 'string',
      name: 'id',
      optional: false,
      description: 'id of the user',
    },
  ],
};

export interface types {
  (id: number): Promise<response>;
};

export interface response {
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
      match: number;
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
      hits: number[];
      mods: {
        id: number;
        name: string;
      };
      rank: string;
      pass: string;
    };
  };
}



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