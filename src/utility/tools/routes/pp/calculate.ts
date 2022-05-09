import { request } from "../../../request";

export const description: any = {
  auth: 4,
  title: __filename,
  method: 'GET',
  description: 'Return pp and details about beatmap',
  params: [
    {
      type: 'string',
      name: 'id',
      optional: false,
      description: 'id of the beatmap',
    },
    {
      type: 'string/number',
      name: 'mods',
      optional: true,
      description: 'Name of the mods \`\`\`HDDT\`\`\` or mods number \`\`\`72\`\`\`',
    },
    {
      type: 'string/number',
      name: 'combo',
      optional: true,
      description: 'Max combo of the play',
    },
    {
      type: 'number',
      name: 'miss',
      optional: true,
      description: 'Amount of misses',
    },
    {
      type: 'number',
      name: 'acc',
      optional: true,
      description: 'Amount of accuracy',
    },
  ],
};

export interface types {
  (id: number, mods?: number, combo?: number, miss?: number, acc?: number): Promise<response>;
};

export interface response {
  id: {
    set: number;
    diff: number;
  };
  mods: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
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
      api: number;
      min: number;
      max: number;
    };
    combo: number;
    time: {
      full: number;
      drain: number;
    };
  };
  pp: {
    current: number;
    fc: number;
    acc: {
      80: number;
      81: number;
      82: number;
      83: number;
      84: number;
      85: number;
      86: number;
      87: number;
      88: number;
      89: number;
      90: number;
      91: number;
      92: number;
      93: number;
      94: number;
      95: number;
      96: number;
      97: number;
      98: number;
      99: number;
      100: number;
    };
  };
  data: {
    artist: string;
    title: string;
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
    diff: string;
  };
  other: {
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
  req: {
    id: number;
    combo: number;
    mods: number;
    acc: number;
    miss: number;
  };
}


const name: types = async (id, mods, combo, miss, acc) => {
  const data = await request('https://pp.osuck.net/pp', { method: 'GET', params: { id, mods, combo, miss, acc } });
  if (!data.id) return null;

  return data;
};

export default name;

export const desc: object = description;