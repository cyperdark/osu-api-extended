import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania'
];

const _genre = [
  '',
  'Unspecified',
  'Video Game',
  'Anime',
  'Rock',
  'Pop',
  'Other',
  'Novelty',
  'Hip Hop',
  'Electronic',
  'Metal',
  'Classical',
  'Folk',
  'Jazz',
];

const _language = [
  'English',
  'Chinese',
  'French',
  'German',
  'Italian',
  'Japanese',
  'Korean',
  'Spanish',
  'Swedish',
  'Russian',
  'Polish',
  'Instrumental',
  'Unspecified',
  'Other',
];


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of beatmaps',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'string',
          name: 'query',
          optional: true,
          description: 'search query, song \`\`title\`\` / \`\`artist\`\`, \`\`stars\`\`, \`\`bpm\`\`, \`\`date\`\` and etc.',
        },
        {
          type: 'string',
          name: 'sort',
          optional: true,
          description: 'search sorting, \`\`title_desc\`\` or \`\`title_asc\`\` or \`\`artist_desc\`\` or \`\`artist_asc\`\` or \`\`difficulty_desc\`\` or \`\`difficulty_asc\`\` or \`\`updated_desc\`\` or \`\`updated_asc\`\` or \`\`ranked_desc\`\` or \`\`ranked_asc\`\` or \`\`rating_desc\`\` or \`\`rating_asc\`\` or \`\`plays_desc\`\` or \`\`plays_asc\`\` or \`\`favourites_desc\`\` or \`\`favourites_asc\`\`',
        },
        {
          type: 'string',
          name: 'general',
          optional: true,
          description: '\`\`converts\`\` or \`\`follows\`\` or \`\`recommended\`\` or \`\`\`featured_artists\`\`\`',
        },
        {
          type: 'string',
          name: 'mode',
          optional: true,
          description: '\`\`osu\`\` or \`\`fruits\`\` or \`\`mania\`\` or \`\`taiko\`\`',
        },
        {
          type: 'string',
          name: 'section',
          optional: true,
          description: '\`\`ranked\`\` or \`\`qualified\`\` or \`\`loved\`\` or \`\`favourites\`\` or \`\`pending\`\` or \`\`graveyard\`\` or \`\`mine\`\`',
        },
        {
          type: 'string',
          name: 'genre',
          optional: true,
          description: '\`\`Unspecified\`\` or \`\`Video Game\`\` or \`\`Anime\`\` or \`\`Rock\`\` or \`\`Pop\`\` or \`\`Other\`\` or \`\`Novelty\`\` or \`\`Hip Hop\`\` or \`\`Electronic\`\` or \`\`Metal\`\` or \`\`Classical\`\` or \`\`Folk\`\` or \`\`Jazz\`\`',
        },
        {
          type: 'string',
          name: 'language',
          optional: true,
          description: '\`\`English\`\` or \`\`Chinese\`\` or \`\`French\`\` or \`\`German\`\` or \`\`Italian\`\` or \`\`Japanese\`\` or \`\`Korean\`\` or \`\`Spanish\`\` or \`\`Swedish\`\` or \`\`Russian\`\` or \`\`Polish\`\` or \`\`Instrumental\`\` or \`\`Unspecified\`\` or \`\`Other\`\`',
        },
        {
          type: 'string',
          name: 'include',
          optional: true,
          description: '\`\`video\`\` or \`\`storyboard\`\`',
        },
        {
          type: 'string',
          name: 'rank',
          optional: true,
          description: '\`\`XH\`\` or \`\`X\`\` or \`\`SH\`\` or \`\`S\`\` or \`\`A\`\` or \`\`B\`\` or \`\`C\`\` or \`\`D\`\`',
        },
        {
          type: 'boolean',
          name: 'nfsw',
          optional: true,
          description: '\`\`true\`\` or \`\`false\`\`',
        },
        {
          type: 'string',
          name: 'cursor_string',
          optional: true,
          description: 'Pagination cursor'
        },
      ]
    }
  ],
  notes: [
    {
      params: ['nsfw'],
      description: 'Those parameters require to login via lazer',
    }
  ],
};


export interface types {
  (filters: {
    query?: string,

    general?: [
      'converts' | 'follows' | 'recommended' | 'featured_artists' | 'spotlights',
    ],
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    section?: 'any' | 'ranked' | 'qualified' | 'loved' | 'favourites' | 'pending' | 'wip' | 'graveyard' | 'mine',
    nfsw?: boolean,
    genre?: 'Unspecified' | 'Video Game' | 'Anime' | 'Rock' | 'Pop' | 'Other' | 'Novelty' | 'Hip Hop' | 'Electronic' | 'Metal' | 'Classical' | 'Folk' | 'Jazz'
    language?: 'English' | 'Chinese' | 'French' | 'German' | 'Italian' | 'Japanese' | 'Korean' | 'Spanish' | 'Swedish' | 'Russian' | 'Polish' | 'Instrumental' | 'Unspecified' | 'Other',

    sort?: 'title_desc' | 'title_asc' | 'artist_desc' | 'artist_asc' | 'difficulty_desc' | 'difficulty_asc' | 'updated_desc' | 'updated_asc' | 'ranked_desc' | 'ranked_asc' | 'rating_desc' | 'rating_asc' | 'plays_desc' | 'plays_asc' | 'favourites_desc' | 'favourites_asc'
    include?: ['video' | 'storyboard'],
    rank?: ['XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D'],
    cursor_string?: string,
  }): Promise<response>;
};

export interface response {
  beatmapsets: {
    artist: string;
    artist_unicode: string;
    covers: {
      cover: string;
      'cover@2x': string;
      card: string;
      'card@2x': string;
      list: string;
      'list@2x': string;
      slimcover: string;
      'slimcover@2x': string;
    };
    creator: string;
    favourite_count: number;
    hype?: string;
    id: number;
    nsfw: boolean;
    offset: number;
    play_count: number;
    preview_url: string;
    source: string;
    status: string;
    title: string;
    title_unicode: string;
    track_id?: string;
    user_id: number;
    video: boolean;
    availability: {
      download_disabled: boolean;
      more_information: string;
    };
    bpm: number;
    can_be_hyped: boolean;
    discussion_enabled: boolean;
    discussion_locked: boolean;
    is_scoreable: boolean;
    last_updated: string;
    legacy_thread_url: string;
    nominations_summary: {
      current: number;
      required: number;
    };
    ranked: number;
    ranked_date: string;
    storyboard: boolean;
    submitted_date: string;
    tags: string;
    has_favourited: boolean;
    beatmaps: {
      beatmapset_id: number;
      difficulty_rating: number;
      id: number;
      mode: string;
      status: string;
      total_length: number;
      user_id: number;
      version: string;
      accuracy: number;
      ar: number;
      bpm: number;
      convert: boolean;
      count_circles: number;
      count_sliders: number;
      count_spinners: number;
      cs: number;
      deleted_at?: string;
      drain: number;
      hit_length: number;
      is_scoreable: boolean;
      last_updated: string;
      mode_int: number;
      passcount: number;
      playcount: number;
      ranked: number;
      url: string;
      checksum: string;
      max_combo: number;
    }[];
  }[];
  search: {
    sort: string;
  };
  recommended_difficulty: number;
  error: string;
  total: number;
  cursor: {
    approved_date: number;
    id: number;
  };
  cursor_string: string;
}



const name: types = async (filters) => {
  const obj: any = {
  };

  if (filters) {
    if (filters.query) obj.q = filters.query;
    if (filters.general) obj.c = filters.general.toString().split(',').join('.');
    if (filters.mode) obj.m = _mode.indexOf(filters.mode).toString();
    if (filters.section) obj.s = filters.section;
    if (filters.nfsw) obj.nsfw = '';
    else obj.nsfw = false;
    if (filters.genre) obj.g = _genre.indexOf(filters.genre).toString();
    if (filters.language) obj.l = _language.indexOf(filters.language).toString();
    if (filters.include) obj.e = filters.include.toString().split(',').join('.');
    if (filters.rank) obj.r = filters.rank.toString().split(',').join('.');

    if (filters.sort) obj.sort = filters.sort;
    if (filters.cursor_string) obj.cursor_string = filters.cursor_string;
  }
  const data = await request(`beatmapsets/search/`, {
    method: 'GET',
    params: obj,
  });

  // console.log(obj);


  return data;
};


export default name;