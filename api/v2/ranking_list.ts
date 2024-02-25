import { request } from "../../utility/request";
import { IDefaultParams, Modes_names } from "../../types";


type params = {
  page?: number;
} & ({
  type: 'charts';

  spotlight_id?: string;

  filter?: 'all' | 'friends';
  mode?: Modes_names;
} | {
  type: 'country';

  filter?: 'all' | 'friends';
  mode?: Modes_names;
} | {
  type: 'performance';

  filter?: 'all' | 'friends';
  country_code?: string;

  mode?: Modes_names;
  variant?: '4k' | '7k';
} | {
  type: 'score';

  filter?: 'all' | 'friends';
  mode?: Modes_names;
} | {
  type: 'kudosu';
});


type Response<T extends params['type']> =
  T extends 'charts'
  ? any
  : T extends 'country'
  ? any
  : T extends 'performance'
  ? any
  : T extends 'score'
  ? any
  : T extends 'kudosu'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']> | { error: string }> => {
  if (params.type == null)
    return {
      error: 'Ranking type not specified',
    };

  if (params.type != 'kudosu' && params.mode == null)
    return {
      error: 'Gamemode not specified',
    };;


  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';

  switch (params.type) {
    case 'charts':
      url += `/rankings/${params.mode}/${params.type}`;

      object = {
        'cursor[page]': params.page,
        filter: params.filter,
        spotlight: params.spotlight_id,
      };
      break;

    case 'country':
      url += `/rankings/${params.mode}/${params.type}`;

      object = {
        'cursor[page]': params.page,
        filter: params.filter,
      };
      break;

    case 'performance':
      url += `/rankings/${params.mode}/${params.type}`;

      object = {
        'cursor[page]': params.page,
        filter: params.filter,
        country: params.country_code,
        variant: params.variant,
      };
      break;

    case 'score':
      url += `/rankings/${params.mode}/${params.type}`;

      object = {
        'cursor[page]': params.page,
        filter: params.filter,
      };
      break;

    case 'kudosu':
      url += `/rankings/kudosu`;

      object.page = params.page;
      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  if ('error' in data)
    return {
      error: 'Api returned error, check your request parameters'
    };


  if (params.type == 'kudosu') return data.ranking as Response<T['type']>;
  return data as Response<T['type']>;
};


export default name;