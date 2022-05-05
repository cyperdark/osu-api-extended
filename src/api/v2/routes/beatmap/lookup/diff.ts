import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: { id?: string, checksum?: string, filename?: string }): Promise<{
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
    beatmapset: {
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
      track_id: number;
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
      ratings: number[];
    };
    failtimes: {
      fail: number[];
      exit: number[];
    };
    max_combo: number;
  }>;
};


const name: types = async (obj) => {
  const data = await request(`beatmaps/lookup`, {
    method: 'GET',
    params: {
      checksum: obj.checksum,
      filename: obj.filename,
      id: obj.id,
    },
  });

  return data;
};


export default name;