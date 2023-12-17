import { beatmap_category, beatmap_sorting, beatmap_statuses, Modes_names, beatmap_genres, beatmap_languages, beatmap_ranks, beatmap_extra } from "../../../types";
import { Genres_enum, Languages_enum, Modes_enums } from "../../../types/enums";
import { SearchBeatmaps, SearchWiki } from '../../../types/v2/search_all';
import { request } from "../../../utility/request";


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


const name = async <T extends params>(obj: T): Promise<Response<T['type']>> => {
  const params: any = {};
  let url = 'https://osu.ppy.sh/api/v2';


  switch (obj.type) {
    case 'site':
      url += '/search';


      params.mode = obj.mode;
      params.query = obj.query;
      params.page = obj.page;
      break;

    case 'beatmaps':
      url += '/beatmapsets/search';

      if (obj._played) params.played = obj._played ? 'played' : 'unplayed';
      if (obj._nsfw) params.nsfw = obj._nsfw;

      if (obj.query) params.q = obj.query;
      if (obj.mode) params.m = typeof obj.mode == 'number' ? obj.mode : Modes_enums[obj.mode];
      if (obj.status) params.s = obj.status;
      if (obj.category) params.c = obj.category.join('.');

      if (obj.genre) params.g = typeof obj.genre == 'number' ? obj.genre : Genres_enum[obj.genre];
      if (obj.language) params.l = typeof obj.language == 'number' ? obj.language : Languages_enum[obj.language];

      if (obj.achieved_rank) params.r = obj.achieved_rank.join('.');

      if (obj.extra) params.e = obj.extra.join('.');

      if (obj.sort) params.sort = obj.sort;
      if (obj.cursor_string) params.cursor_string = obj.cursor_string;
      break;
  };


  const data = await request(url, {
    method: 'GET',
    params: params,
  });

  return data as Response<T['type']>;
};


export default name;