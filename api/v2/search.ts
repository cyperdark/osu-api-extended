import { beatmap_category, beatmap_sorting, beatmap_statuses, Modes_names, beatmap_genres, beatmap_languages, beatmap_ranks, beatmap_extra, IDefaultParams, IError } from "../../types";
import { Genres_enum, Languages_enum, GamemodeEnum } from "../../types/enums";
import { SearchBeatmaps, SearchWiki } from '../../types/v2/search_all';
import { handleErrors } from "../../utility/handleErrors";
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
  ? SearchWiki & IError
  : T extends 'beatmaps'
  ? SearchBeatmaps & IError
  : IError;


export const search_all = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
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

      if (params._played != null) object.played = params._played ? 'played' : 'unplayed';
      if (params._nsfw != null) object.nsfw = params._nsfw;

      if (params.query != null) object.q = params.query;
      if (params.mode != null) object.m = typeof params.mode == 'number' ? params.mode : GamemodeEnum[params.mode];
      if (params.status != null) object.s = params.status;
      if (params.category != null) object.c = params.category.join('.');

      if (params.genre != null) object.g = typeof params.genre == 'number' ? params.genre : Genres_enum[params.genre];
      if (params.language != null) object.l = typeof params.language == 'number' ? params.language : Languages_enum[params.language];

      if (params.achieved_rank != null) object.r = params.achieved_rank.join('.');

      if (params.extra != null) object.e = params.extra.join('.');

      if (params.sort != null) object.sort = params.sort;
      if (params.cursor_string != null) object.cursor_string = params.cursor_string;
      break;
  };


  const data = await request(url, {
    method: 'GET',
    params: object,
    addons
  });

  if (data.error) return handleErrors(data.error) as Response<T['type']>;


  return data as Response<T['type']>;
};