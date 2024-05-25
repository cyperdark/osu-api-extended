import { IError } from "../../../types";
import { handleErrors } from "../../../utility/handleErrors";
import { request } from "../../../utility/request";
import form from "../form/match";



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

type Response = response & IError;

export interface types {
  (id: number): Promise<Response>;
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

  const data = await request(`https://osu.ppy.sh/api/get_match`, {
    method: 'GET',
    params: params,
  });
  if (data.error) return handleErrors(data.error) as Response;


  if (data.match == 0 || !data.match) {
    return handleErrors('Match not found') as Response;
  };

  const format: response = form(data);
  return format as Response;
};


export default name;