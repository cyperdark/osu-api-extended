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


export interface types {
  (filters: {
    query?: string,
    general?: 'converts' | 'follows' | 'recommended',
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    section?: 'ranked' | 'qualified' | 'loved' | 'favourites' | 'pending' | 'graveyard' | 'mine',
    genre?: 'Unspecified' | 'Video Game' | 'Anime' | 'Rock' | 'Pop' | 'Other' | 'Novelty' | 'Hip Hop' | 'Electronic' | 'Metal' | 'Classical' | 'Folk' | 'Jazz'
    language?: 'English' | 'Chinese' | 'French' | 'German' | 'Italian' | 'Japanese' | 'Korean' | 'Spanish' | 'Swedish' | 'Russian' | 'Polish' | 'Instrumental' | 'Unspecified' | 'Other',
    include?: 'video' | 'storyboard',
    rank?: 'XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D',
    nfsw?: boolean,
  }): Promise<{
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
      id: number;
      nsfw: boolean;
      offset: number;
      play_count: number;
      preview_url: string;
      source: string;
      status: string;
      title: string;
      title_unicode: string;
      user_id: number;
      video: boolean;
      availability: {
        download_disabled: boolean;
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
        deleted_at: object;
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
      track_id?: number;
    }[];
    search: {
      sort: string;
    };
    recommended_difficulty: number;
    total: number;
    cursor: {
      approved_date: string;
      id: string;
    };
    cursor_string: string;
  }>;
};


const name: types = async (filters) => {
  const oobj: any = {
    q: filters.query,
    c: filters?.general,
    m: _mode.indexOf(filters?.mode),
    s: filters?.section,
    g: _genre.indexOf(filters?.genre),
    l: _language.indexOf(filters?.language),
    e: filters?.include,
    r: filters?.rank,
    nsfw: undefined,
  };
  if (!filters?.nfsw) oobj.nsfw = 0;
  const data = await request(`beatmapsets/search/`, {
    method: 'GET',
    params: filters,
  });

  return data;
};


export default name;