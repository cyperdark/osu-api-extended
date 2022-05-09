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
      type: 'string',
      name: 'query',
      optional: true,
      description: 'search query, song \`\`title\`\` / \`\`artist\`\`, \`\`stars\`\`, \`\`bpm\`\`, \`\`date\`\` and etc.',
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
  ],
};


export interface types {
  (filters: {
    query?: string,
    general?: 'converts' | 'follows' | 'recommended' | 'featured_artists',
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    section?: 'ranked' | 'qualified' | 'loved' | 'favourites' | 'pending' | 'graveyard' | 'mine',
    genre?: 'Unspecified' | 'Video Game' | 'Anime' | 'Rock' | 'Pop' | 'Other' | 'Novelty' | 'Hip Hop' | 'Electronic' | 'Metal' | 'Classical' | 'Folk' | 'Jazz'
    language?: 'English' | 'Chinese' | 'French' | 'German' | 'Italian' | 'Japanese' | 'Korean' | 'Spanish' | 'Swedish' | 'Russian' | 'Polish' | 'Instrumental' | 'Unspecified' | 'Other',
    include?: 'video' | 'storyboard',
    rank?: 'XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D',
    nfsw?: boolean,
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
    q: filters?.query,
    c: filters?.general,
    m: _mode.indexOf(filters?.mode),
    s: filters?.section,
    g: _genre.indexOf(filters?.genre),
    l: _language.indexOf(filters?.language),
    e: filters?.include,
    r: filters?.rank,
    nsfw: undefined,
  };
  if (!filters?.nfsw) obj.nsfw = 0;
  const data = await request(`beatmapsets/search/`, {
    method: 'GET',
    params: filters,
  });

  return data;
};


export default name;