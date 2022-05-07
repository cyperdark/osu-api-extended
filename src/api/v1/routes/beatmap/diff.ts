import { namespace, RequestNamepsace } from "../../../../utility/request";
import { id as mods_id } from "../../../../utility/mods";
import form from "../../form/beatmap/category";

const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export interface types {
  (id: number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    converted?: '0' | '1',
    hash?: string,
    limit?: number,
    mods?: string | number,
    since?: string,
  }): Promise<{
    id: {
      set: number;
      diff: number;
    };
    date: {
      submit: string;
      approved: string;
      update: string;
    };
    metadata: {
      artist: {
        original: string;
        unicode: string;
      };
      title: {
        original: string;
        unicode: string;
      };
      creator: {
        id: number;
        name: string;
      };
      favs: number;
      rating: number;
      source: string;
      genre_id: {
        id: number;
        name: string;
      };
      language_id: {
        id: number;
        name: string;
      };
      tags: string;
    };
    status: {
      id: number;
      name: string;
    };
    difficulties: {
      id: number;
      diff: string;
      mode: object;
      file_md5: string;
      stats: object;
      plays: number;
      pass: number;
    }[];
    misc: {
      download_unavailable: boolean;
      audio_unavailable: boolean;
      storyboard: boolean;
      video: boolean;
      bg: {
        full: string;
        raw: string;
        slim: {
          1: string;
          2: string;
        };
        cover: {
          1: string;
          2: string;
        };
        card: {
          1: string;
          2: string;
        };
        list: {
          1: string;
          2: string;
        };
      };
    };
  }>;
};


const name: types = async (id, obj = {}) => {
  const params = {
    b: id,
    m: _mode.indexOf(obj.mode),
    a: obj.converted,
    h: obj.hash,
    since: obj.since,
    mods: mods_id(obj.mods),
    limit: obj.limit,
  };

  const data = await request(`get_beatmaps`, {
    method: 'GET',
    params: params,
  });

  if (data.length == 0) return null;

  const format = form(data);
  return format;
};


export default name;