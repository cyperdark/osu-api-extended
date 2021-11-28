interface IdNamed {
  id: number;
  name: string;
};

export interface RequestNamepsace {
  (url: string, { params }: { params?: object }): Promise<any>
};

export interface diff_object {
  id: number;
  diff: string;
  mode: IdNamed;
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
}

export interface beatmap_object {
  id: {
    set: number;
    diff: number;
  };
  date: {
    submit: string;
    update: string;
    approved: string;
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
    creator: IdNamed;
    favs: number;
    rating: number;
    source: string;
    genre_id: IdNamed;
    language_id: IdNamed;
    tags: string;
  };
  status: IdNamed;
  difficulties: diff_object[];
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
};

export interface Events {
  id: {
    diff: number;
    set: number;
  };
  display: {
    html: string;
    pure: string;
  };
  date: string;
  epicfactor: number;
};

export interface user_object {
  id: number;
  name: string;
  pp: number;
  acc: number;
  lvl: number;
  join: string;
  country: {
    flag: string;
    short: string;
    full: string;
  };
  play: {
    count: number;
    time: number;
  };
  hits: {
    300: number;
    100: number;
    50: number;
  };
  score: {
    total: number;
    ranked: number;
  };
  rank: {
    global: number;
    country: number;
  };
  ranks: {
    ssh: number;
    ss: number;
    sh: number;
    s: number;
    a: number;
  };
  events: Events[];
};

export interface user_object {
  id: number;
  name: string;
  pp: number;
  acc: number;
  lvl: number;
  join: string;
  country: {
    flag: string;
    short: string;
    full: string;
  };
  play: {
    count: number;
    time: number;
  };
  hits: {
    300: number;
    100: number;
    50: number;
  };
  score: {
    total: number;
    ranked: number;
  };
  rank: {
    global: number;
    country: number;
  };
  ranks: {
    ssh: number;
    ss: number;
    sh: number;
    s: number;
    a: number;
  };
  events: Events[];
};

export interface scores_object {
  date: string;
  rank: string;
  user: IdNamed;
  score: {
    total: number;
    id: number;
  };
  combo: {
    max: number;
    full: number;
  };
  hits: {
    300: number;
    geki: number;
    100: number;
    katu: number;
    50: number;
    0: number;
  };
  mods: IdNamed;
  accuracy: number;
  pp: number;
  replay: number;
};


export interface best_object {
  date: string;
  beatmap: number;
  rank: string;
  user: {
    id: number;
  };
  score: {
    id: number;
    total: number;
  };
  combo: {
    max: number;
    full: number;
  };
  hits: {
    300: number;
    geki: number;
    100: number;
    katu: number;
    50: number;
    0: number;
  };
  mods: IdNamed;
  accuracy: number;
  pp: number;
  replay: number;
};

export interface recent_object {
  date: string;
  beatmap: number;
  rank: string;
  user: {
    id: number;
  };
  score: {
    total: number;
  };
  combo: {
    max: number;
    full: number;
  };
  hits: {
    300: number;
    geki: number;
    100: number;
    katu: number;
    50: number;
    0: number;
  };
  mods: IdNamed;
  accuracy: number;
};

export interface MatchGame {
  id: number;
  time: {
    start: string;
    end: string;
  };
  beatmap_id: number;
  mode: IdNamed;
  types: {
    match: string;
    scoring: IdNamed;
    team: IdNamed;
  };
  mods: IdNamed;
  scores: MatchScore[];
};

export interface MatchScore {
  team: IdNamed;
  slot: number;
  user: {
    id: number;
  };
  score: number;
  combo: {
    max: number;
    perfect: number;
  };
  hits: {
    300: number;
    geki: number;
    100: number;
    katu: number;
    50: number;
    0: number;
  };
  mods: IdNamed;
  rank: string;
  pass: string;
};

export interface match_object {
  match: {
    id: number;
    name: string;
    time: {
      start: string;
      end: string;
    };
  };
  games: MatchGame[];
};





/* ========  FUNCTIONS TYPES ======== */


export interface Tbeatmap {
  diff(diff_id: number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko', converted?: '0' | '1',
    hash?: string, limit?: number, mods?: string | number, since?: string,
  }): Promise<beatmap_object> | null;
  set(set_id: number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko', converted?: '0' | '1',
    hash?: string, limit?: number, mods?: string | number, since?: string,
  }): Promise<beatmap_object> | null;
  user(user: string | number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko', converted?: '0' | '1', type?: 'u' | 'id',
    hash?: string, limit?: number, mods?: string | number, since?: string,
  }): Promise<beatmap_object> | null;
  scores(diff_id: number, obj?: {
    user?: string | number, type?: 'u' | 'id',
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    mods?: string | number,
    limit?: number,
  }): Promise<scores_object[]> | null;
};

export interface Tuser {
  get(user: string | number, obj?: { mode?: 'osu' | 'fruits' | 'mania' | 'taiko', type?: 'u' | 'id', event_days?: number }): Promise<user_object> | null;
  scores: {
    best(user: string | number, obj?: {
      mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
      type?: 'u' | 'id',
    }): Promise<best_object[]> | null;
    recent(user: string | number, obj?: {
      mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
      type?: 'u' | 'id',
      limit?: number,
    }): Promise<recent_object[]> | null;
  };
};


export interface Tmatch {
  (id: number): Promise<match_object> | null;
};

export interface Treplay {
  (obj: {
    diff_id?: number, user?: string | number,
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    score_id?: number,
    mods?: string | number,
    type?: 'u' | 'id',
  }, dest?: string, file?: string): Promise<string>;
};