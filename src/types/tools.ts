interface IdNamed {
  id: number;
  name: string;
};

export interface pp_calc_object {
  id: {
    set: number;
    diff: number;
  };
  mods: IdNamed;
  status: IdNamed;
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
    creator: IdNamed;
    favs: number;
    rating: number;
    source: string;
    genre_id: IdNamed;
    language_id: IdNamed;
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