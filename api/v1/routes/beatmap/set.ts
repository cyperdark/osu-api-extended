import { namespace, RequestNamespace } from "../../../../utility/request";
import { id as mods_id } from "../../../../utility/mods";
import form from "../../form/beatmap/category";

const request: RequestNamespace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export const description: any = {
  auth: 2,
  title: __filename,
  method: 'GET',
  description: 'Return data of the beatmap set',
  params: [
    {
      type: 'number',
      name: 'id',
      optional: false,
      description: 'id of the beatmap',
    },
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string',
      name: 'converted',
      optional: true,
      description: '\`\`\`0\`\`\` or \`\`\`1\`\`\`',
    },
    {
      type: 'string',
      name: 'hash',
      optional: true,
      description: 'beatmap file hash',
    },
    {
      type: 'string',
      name: 'limit',
      optional: true,
      description: 'Maximum number of results',
    },
    {
      type: 'string/number',
      name: 'mods',
      optional: true,
      description: 'Name of the mods \`\`\`HDDT\`\`\` or mods number \`\`\`72\`\`\`',
    },
    {
      type: 'string',
      name: 'since',
      optional: true,
      description: 'Return all beatmaps ranked or loved since this date. Must be a MySQL date. In UTC',
    },
  ],
};

export interface types {
  (id: number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    converted?: '0' | '1',
    hash?: string,
    limit?: number,
    mods?: string | number,
    since?: string,
  }): Promise<response>;
};

export interface response {
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
    mode: {
      id: number;
      name: string;
    };
    file_md5: string;
    stats: {
      star: {
        pure: number;
        aim: number;
        speed: number;
      };
      ar: number;
      od: number;
      cs: number;
      hp: number;
      bpm: {
        avg: number;
      };
      combo: number;
      time: {
        full: number;
        drain: number;
      };
      objects: {
        all: number;
        circles: number;
        sliders: number;
        spinners: number;
      };
    };
    plays: number;
    pass: number;
  };
  misc: {
    download_unavailable: boolean;
    audio_unavailable: boolean;
    storyboard: boolean;
    video: boolean;
    packs: string;
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
}



const name: types = async (id, obj = {}) => {
  const params = {
    s: id,
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