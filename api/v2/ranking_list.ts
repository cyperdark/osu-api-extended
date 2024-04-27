import { request } from "../../utility/request";
import { IDefaultParams, IError, Modes_names } from "../../types";
import { RankingListChartsResponse } from "../../types/v2/ranking_list_charts";
import { RankingListCountryResponse } from "../../types/v2/ranking_list_country";
import { RankingListPerformanceResponse } from "../../types/v2/ranking_list_performance";
import { RankingListKudosuResponse } from "../../types/v2/ranking_list_kudosu";
import { RankingListScoreResponse } from "../../types/v2/ranking_list_score";


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
  ? RankingListChartsResponse & IError
  : T extends 'country'
  ? RankingListCountryResponse & IError
  : T extends 'performance'
  ? RankingListPerformanceResponse & IError
  : T extends 'score'
  ? RankingListScoreResponse & IError
  : T extends 'kudosu'
  ? RankingListKudosuResponse & IError
  : IError;


export const ranking_list = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  if (params.type != 'kudosu' && params.mode == null) {
    return {
      error: new Error('Gamemode not specified'),
    } as Response<T['type']>;
  };


  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';

  switch (params.type) {
    case 'charts':
      url += `/rankings/${params.mode}/${params.type}`;

      object['cursor[page]'] = params.page;
      object.filter = params.filter;
      object.spotlight = params.spotlight_id;

      break;

    case 'country':
      url += `/rankings/${params.mode}/${params.type}`;

      object['cursor[page]'] = params.page;
      object.filter = params.filter;
      break;

    case 'performance':
      url += `/rankings/${params.mode}/${params.type}`;

      object['cursor[page]'] = params.page;
      object.filter = params.filter;
      object.country = params.country_code;
      object.variant = params.variant;

      break;

    case 'score':
      url += `/rankings/${params.mode}/${params.type}`;

      object['cursor[page]'] = params.page;
      object.filter = params.filter;
      break;

    case 'kudosu':
      url += `/rankings/kudosu`;

      object.page = params.page;
      break;

    default:
      return { error: new Error(`Unsupported type: ${(params as any).type}`) } as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  if ('error' in data) {
    return data as Response<T['type']>;
  };


  if (params.type == 'kudosu') return data.ranking as Response<T['type']>;
  return data as Response<T['type']>;
};