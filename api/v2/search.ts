import { beatmap_category, beatmap_sorting, beatmap_statuses, Modes_names, beatmap_genres, beatmap_languages, beatmap_ranks, beatmap_extra, IDefaultParams } from "../../types";
import { Genres_enum, Languages_enum, Modes_enums } from "../../types/enums";
import { SearchBeatmaps, SearchWiki } from '../../types/v2/search_all';
import { request } from "../../utility/request";


type params = ({
  type: 'site';
  mode?: 'all' | 'user' | 'wiki_page';
  query?: string;
  page?: number;
} | {
  _played?: boolean;
  _nsfw?: boolean;

  type: 'beatmaps';
  query?: string;
  mode?: Modes_names | number;
  status?: beatmap_statuses;
  category?: (beatmap_category)[];

  genre?: beatmap_genres | number;
  language?: beatmap_languages | number;

  achieved_rank?: (beatmap_ranks)[];

  extra?: (beatmap_extra)[];
  sort?: beatmap_sorting;

  cursor_string?: string;
});

type Response<T extends params['type']> =
  T extends 'site'
  ? SearchWiki
  : T extends 'beatmaps'
  ? SearchBeatmaps
  : never;


const name = async <T extends params>(params: T, addons: IDefaultParams): Promise<Response<T['type']>> => {
  const object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';


  switch (params.type) {
    case 'site':
      url += '/search';


      object.mode = params.mode;
      object.query = params.query;
      object.page = params.page;
      break;

    case 'beatmaps':
      url += '/beatmapsets/search';

      if (params._played) object.played = params._played ? 'played' : 'unplayed';
      if (params._nsfw) object.nsfw = params._nsfw;

      if (params.query) object.q = params.query;
      if (params.mode) object.m = typeof params.mode == 'number' ? params.mode : Modes_enums[params.mode];
      if (params.status) object.s = params.status;
      if (params.category) object.c = params.category.join('.');

      if (params.genre) object.g = typeof params.genre == 'number' ? params.genre : Genres_enum[params.genre];
      if (params.language) object.l = typeof params.language == 'number' ? params.language : Languages_enum[params.language];

      if (params.achieved_rank) object.r = params.achieved_rank.join('.');

      if (params.extra) object.e = params.extra.join('.');

      if (params.sort) object.sort = params.sort;
      if (params.cursor_string) object.cursor_string = params.cursor_string;
      break;
  };


  const data = await request(url, {
    method: 'GET',
    params: object,
    addons
  });

  return data as Response<T['type']>;
};


export default name;