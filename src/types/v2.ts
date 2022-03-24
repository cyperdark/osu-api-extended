export interface RequestNamepsace {
  (url: string, { params }: { params?: object }): Promise<any>
};

export const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania'
];

export const _genre = [
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

export const _language = [
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

export interface BmShort {
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
  deleted_at: null | string;
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
};

export interface BmSetShort {
  artist: string;
  artist_unicode: string;
  covers: covers_object;
  creator: string;
  favourite_count: number;
  hype: null | object;
  id: number;
  nsfw: boolean;
  play_count: number;
  preview_url: string;
  source: string;
  status: string;
  title: string;
  title_unicode: string;
  track_id: number | null,
  user_id: number;
  video: boolean;
};

export interface covers_object {
  cover: string;
  'cover@2x': string;
  card: string;
  'card@2x': string;
  list: string;
  'list@2x': string;
  slimcover: string;
  'slimcover@2x': string;
};

export interface user_small {
  avatar_url: string;
  country_code: string;
  default_group: string;
  id: number;
  is_active: boolean;
  is_bot: boolean;
  is_deleted: boolean;
  is_online: boolean;
  is_supporter: boolean;
  last_visit: string;
  pm_friends_only: boolean;
  profile_colour: string | null;
  username: string;
  groups?: string[];
};

export interface user_country extends user_small {
  country: {
    code: string;
    name: string;
  };
};

export interface user_short extends user_country {
  cover: {
    custom_url: string;
    url: string;
    id: string;
  };
};

export interface user_ruleset_object {
  level: {
    current: number;
    progress: number;
  },
  global_rank: number;
  pp: number;
  ranked_score: number;
  hit_accuracy: number;
  play_count: number;
  play_time: number;
  total_score: number;
  total_hits: number;
  maximum_combo: number;
  replays_watched_by_others: number;
  is_ranked: number;
  grade_counts: {
    ss: number;
    ssh: number;
    s: number;
    sh: number;
    a: number;
  }
};

export interface user_rulesets extends user_short {
  statistics_rulesets: {
    osu: user_ruleset_object,
    taiko: user_ruleset_object,
    fruits: user_ruleset_object,
    mania: user_ruleset_object
  };
};

export interface user_friends extends user_short {
  statistics_rulesets: user_ruleset_object;
  support_level: number;
};

export interface user_data {
  cover_url: string;
  discord: string;
  has_supported: boolean;
  interests: string;
  join_date: string;
  kudosu: {
    total: number;
    available: number;
  },
  location: string;
  max_blocks: number;
  max_friends: number;
  occupation: string;
  playmode: string;
  playstyle: string[];
  post_count: number;
  profile_order: string[],
  title: string;
  title_url: string;
  twitter: string;
  website: string;
  is_restricted: boolean;
  account_history: [],
  active_tournament_banner: null,
  badges: {
    awarded_at: string;
    description: string;
    image_url: string;
    url: string;
  }[];
  beatmap_playcounts_count: number;
  comments_count: number;
  favourite_beatmapset_count: number;
  follower_count: number;
  graveyard_beatmapset_count: number;
  loved_beatmapset_count: number;
  mapping_follower_count: number;
  monthly_playcounts: {
    start_date: string;
    count: number;
  }[];
  page: {
    html: string;
    raw: string;
  },
  pending_beatmapset_count: number;
  previous_usernames: string[];
  ranked_beatmapset_count: number;
  replays_watched_counts: {
    start_date: string;
    count: number;
  }[];
  scores_best_count: number;
  scores_first_count: number;
  scores_recent_count: number;
  statistics: {
    level: {
      current: number,
      progress: number,
    },
    global_rank: number,
    pp: number,
    ranked_score: number,
    hit_accuracy: number,
    play_count: number,
    play_time: number,
    total_score: number,
    total_hits: number,
    maximum_combo: number,
    replays_watched_by_others: number,
    is_ranked: boolean,
    grade_counts: {
      ss: number,
      ssh: number,
      s: number,
      sh: number,
      a: number,
    },
    country_rank: number,
    rank: {
      country: number,
    }
  };
  support_level: number;
  user_achievements: {
    achieved_at: string;
    achievement_id: number;
  }[];
  rankHistory: {
    mode: string;
    data: number[];
  };
  rank_history: {
    mode: string;
    data: number[];
  };
  ranked_and_approved_beatmapset_count: number;
  unranked_beatmapset_count: number;
};

export interface id_name {
  id: number;
  name: string;
};


/* ====  NEWS START  ==== */

export interface NewsPosts {
  id: number;
  author: string;
  edit_url: string;
  first_image: string;
  published_at: string;
  updated_at: string;
  slug: string;
  title: string;
  preview: string;
};

export interface news_object {
  news_posts: NewsPosts[];
  search: {
    cursor: {
      published_at: string;
      id: number;
    } | null;
    limit: number;
  };
  cursor: {
    published_at: string;
    id: number;
  };
};



export interface _news {
  (obj: { limit?: number, year?: number, cursorPublished?: string, cursorId?: number }): Promise<news_object>
};

/* ====  NEWS END  ==== */


/* ====  CHANGELOGS START  ==== */

export interface build_ver_obj {
  id: number,
  version: string;
  display_version: string;
  users: number,
  created_at: string;
  update_stream: {
    id: number,
    name: string;
    display_name: string;
    is_featured: boolean;
  };
};

export interface build_object {
  id: number;
  version: string;
  display_version: string;
  users: number;
  created_at: string;
  update_stream: {
    id: number;
    name: string;
    display_name: string;
    is_featured: boolean;
  };
  changelog_entries: {
    id: number;
    repository: string;
    github_pull_request_id: number;
    github_url: string;
    url: null | string;
    type: string;
    category: string;
    title: string;
    major: boolean;
    created_at: string;
    github_user: {
      id: number;
      display_name: string;
      github_url: string;
      osu_username: null;
      user_id: null;
      user_url: null;
    };
    message: null | string;
    message_html: null | string;
  }[];
  versions: {
    next?: build_ver_obj,
    previous: build_ver_obj
  };
};

export interface changelog_object {
  streams: {
    id: number;
    name: string;
    display_name: string;
    is_featured: boolean;
    latest_build: {
      id: number;
      version: string;
      display_version: string;
      users: number;
      created_at: string;
      update_stream: {
        id: number;
        name: string;
        display_name: string;
        is_featured: boolean;
      };
    };
    user_count: number;
  }[];
  builds: build_object[];
  search: {
    stream: string | null;
    from: number | null;
    to: number | null;
    max_id: number | null;
    limit: number;
  };
};



export interface _changelogs {
  all(obj: { from?: string, to?: string, max_id?: number, stream?: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web', message_formats?: ['html', 'markdown'] }): Promise<changelog_object>;
  get(stream: 'stable40' | 'stable' | 'beta40' | 'cuttingedge' | 'lazer' | 'web', build: string): Promise<build_object>;
  lookup(changelog: string | number, obj: { key?: string, message_formats?: ['html', 'markdown'] }): Promise<build_object>;
};

/* ====  CHANGELOGS END  ==== */


/* ====  BEATMAPS START  ==== */

export interface beatmaps_short_object {
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
  deleted_at: string | null;
  drain: number;
  hit_length: number;
  is_scoreable: boolean;
  last_updated: string
  mode_int: number;
  passcount: number;
  playcount: number;
  ranked: number;
  url: string;
  checksum: string;
  failtimes: {
    fail: number[];
    exit: number[];
  };
  max_combo?: number;
};

export interface beatmaps_short_2_object extends beatmaps_short_object {
  beatmapset: beatmapset_object;
};

export interface beatmaps_small_object {
  artist: string;
  artist_unicode: string;
  covers: covers_object;
  creator: string;
  favourite_count: number;
  hype?: {
    current: number;
    required: number;
  };
  id: number;
  nsfw: boolean;
  play_count: number;
  preview_url: string;
  source: string;
  status: string;
  title: string;
  title_unicode: string;
  track_id: number | null;
  user_id: number;
  video: boolean;
  user?: user_small;
};

export interface beatmaps_object {
  artist: string;
  artist_unicode: string;
  covers: covers_object;
  creator: string;
  favourite_count: number;
  hype: null | object;
  id: number;
  nsfw: boolean;
  play_count: number;
  preview_url: string;
  source: string;
  status: string;
  title: string;
  title_unicode: string;
  track_id: null | number;
  user_id: number;
  video: boolean;
  availability: {
    download_disabled: boolean;
    more_information: string | null;
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
    required: number
  };
  ranked: number;
  ranked_date: string;
  storyboard: boolean;
  submitted_date: string;
  tags: string;
  has_favourited: boolean;
  beatmaps: beatmaps_short_object[];
};

export interface bm_full_object extends beatmaps_object {
  converts: beatmaps_short_object[];
  description: {
    description: string;
  };
  genre: id_name;
  language: id_name;
  ratings: number[];
  recent_favourites: user_small[];
  user: user_small;
};

export interface disscusion_small_object {
  id: number;
  beatmapset_id: number;
  beatmap_id: number;
  user_id: number;
  deleted_by_id: number | null;
  message_type: string;
  parent_id: number | null;
  timestamp: number;
  resolved: boolean;
  can_be_resolved: boolean;
  can_grant_kudosu: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null,
  last_post_at: string;
  kudosu_denied: boolean;
  starting_post: {
    beatmapset_discussion_id: number;
    created_at: string;
    deleted_at: string | null;
    deleted_by_id: number | null;
    id: number;
    last_editor_id: number | null;
    message: string;
    system: boolean;
    updated_at: string;
    user_id: number;
  };
};

export interface beatmaps_events_object {
  events: {
    id: number;
    type: string;
    comment: {
      beatmap_discussion_id: number;
      beatmap_discussion_post_id: number;
    },
    created_at: string;
    user_id: number;
    beatmapset: beatmaps_small_object;
    discussion: disscusion_small_object;
  }[];
  reviewsConfig: {
    max_blocks: number;
  };
  users: user_small[];
};

export interface beatmapset_object {
  artist: string;
  artist_unicode: string;
  covers: covers_object;
  creator: string;
  favourite_count: number;
  hype: null | object;
  id: number;
  nsfw: boolean;
  play_count: string;
  preview_url: string;
  source: string;
  status: string;
  title: string;
  title_unicode: string;
  track_id: null | number;
  user_id: number;
  video: boolean;
  availability: {
    download_disabled: boolean;
    more_information: string | null;
  },
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
  },
  ranked: number;
  ranked_date: string;
  storyboard: boolean;
  submitted_date: string;
  tags: string;
  has_favourited: boolean;
  ratings: number;
};

export interface beatmap_sets_object {
  artist: string;
  artist_unicode: string;
  covers: covers_object;
  creator: string;
  favourite_count: number;
  hype: object | null;
  id: number;
  nsfw: boolean;
  play_count: number;
  preview_url: string;
  source: string;
  status: string;
  title: string;
  title_unicode: string;
  track_id: number | null;
  user_id: number;
  video: boolean;
  availability: {
    download_disabled: boolean;
    more_information: string | null;
  },
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
  },
  ranked: number;
  ranked_date: string;
  storyboard: boolean;
  submitted_date: string;
  tags: string;
  has_favourited: boolean;
  beatmaps: beatmaps_short_object[];
};

export interface beatmap_scores_all {
  id: number;
  user_id: number;
  ccuracy: number;
  mods: string[];
  score: number;
  max_combo: number;
  passed: boolean,
  perfect: boolean;
  statistics: {
    count_50: number;
    count_100: number;
    count_300: number;
    count_geki: number;
    count_katu: number;
    count_miss: number;
  };
  rank: string;
  created_at: string;
  best_id: number;
  pp: number;
  mode: string;
  mode_int: number;
  replay: boolean;
  user: user_short;
};

export interface beatmap_scores_user {
  position: number;
  score: beatmap_scores_all;
};

export interface beatmap_scores_user_all {
  scores: {
    id: number,
    user_id: number,
    accuracy: number,
    mods: object,
    score: number,
    max_combo: number,
    passed: boolean,
    perfect: boolean,
    statistics: {
      count_50: number,
      count_100: number,
      count_300: number,
      count_geki: number,
      count_katu: number,
      count_miss: number
    },
    rank: string,
    created_at: string,
    best_id: number,
    pp: number,
    mode: string,
    mode_int: number,
    replay: boolean,
    current_user_attributes: { pin: null }
  }[]
}



export interface _beatmaps {
  get(id: number): Promise<bm_full_object>;
  events(obj: {
    user?: string | number,
    types?: ['nominate' | 'qualify' | 'rank' | 'love' | 'nomination_reset' | 'nomination_reset_received' | 'disqualify' | 'remove_from_loved' | 'kudosu_gain' | 'kudosu_lost' | 'genre_edit' | 'language_edit' | 'nsfw_toggle' | 'issue_resolve' | 'issue_reopen' | 'beatmap_owner_change'],
    min_date?: string,
    max_date?: string,
  }): Promise<beatmaps_events_object>;
  search(obj?: {
    query?: string,
    general?: 'converts' | 'follows' | 'recommended',
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    section?: 'ranked' | 'qualified' | 'loved' | 'favourites' | 'pending' | 'graveyard' | 'mine',
    genre?: 'Unspecified' | 'Video Game' | 'Anime' | 'Rock' | 'Pop' | 'Other' | 'Novelty' | 'Hip Hop' | 'Electronic' | 'Metal' | 'Classical' | 'Folk' | 'Jazz'
    language?: 'English' | 'Chinese' | 'French' | 'German' | 'Italian' | 'Japanese' | 'Korean' | 'Spanish' | 'Swedish' | 'Russian' | 'Polish' | 'Instrumental' | 'Unspecified' | 'Other',
    include?: 'video' | 'storyboard',
    rank?: 'XH' | 'X' | 'SH' | 'S' | 'A' | 'B' | 'C' | 'D',
    nfsw?: boolean,
  }): Promise<beatmap_sets_object>;
};

export interface _beatmap {
  get(id: number): Promise<beatmaps_short_2_object>;
  search(obj: { diff_id?: string, checksum?: string, filename?: string }): Promise<beatmaps_short_2_object>;
  scores: {
    all(beatmap: number, obj: { mode?: 'osu' | 'fruits' | 'mania' | 'taiko', mods?: string }): Promise<{ scores: beatmap_scores_all[] }>;
    user(beatmap: number, user: number, obj: { mode?: 'osu' | 'fruits' | 'mania' | 'taiko', mods?: Array<string> }): Promise<beatmap_scores_user>;
    user_all(beatmap: number, user: number, mode?: 'osu' | 'fruits' | 'mania' | 'taiko'): Promise<beatmap_scores_user_all>;
  };
};

/* ====  BEATMAPS END  ==== */


/* ====  SCORES START  ==== */

export interface user_scores_object {
  id: number;
  user_id: number;
  accuracy: number;
  mods: string[];
  score: number;
  max_combo: number;
  passed: boolean;
  perfect: boolean;
  statistics: {
    count_50: number;
    count_100: number;
    count_300: number;
    count_geki: number;
    count_katu: number;
    count_miss: number;
  };
  rank: string;
  created_at: string;
  best_id?: null | number;
  pp: null | number;
  mode: string;
  mode_int: number;
  replay: boolean;
  beatmap: BmShort;
  beatmapset: BmSetShort;
  weight?: {
    percentage: number;
    pp: number;
  };
  rank_global?: number;
  user: user_small;
};

export interface _scores {
  users: {
    recent(user: number, obj: {
      mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
      include_fails?: '1' | '0',
      limit?: number,
      offset?: number,
    }): Promise<user_scores_object[]>;
    best(user: number, obj: {
      mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
      limit?: number,
      offset?: number,
    }): Promise<user_scores_object[]>;
    firsts(user: number, obj: {
      mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
      limit?: number,
      offset?: number,
    }): Promise<user_scores_object[]>
    pinned(user: number, obj: {
      mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
      limit?: number,
      offset?: number,
    }): Promise<user_scores_object[]>
  };
  score: {
    get(mode: 'osu' | 'fruits' | 'mania' | 'taiko', score_id: number): Promise<user_scores_object>;
    download(mode: 'osu' | 'fruits' | 'mania' | 'taiko', score_id: number, file_path: string): Promise<string | Error>
  };
};

/* ====  SCORES END  ==== */


/* ====  DISCUSSIONS START  ==== */

export interface discussions_full_object {
  id: number | null;
  beatmapset_id: number | null;
  beatmap_id: number | null;
  user_id: number | null;
  deleted_by_id: number | null;
  message_type: string;
  parent_id: number | null;
  timestamp: string | null;
  resolved: boolean;
  can_be_resolved: boolean;
  can_grant_kudosu: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  last_post_at: string;
  kudosu_denied: boolean;
  beatmapset: beatmaps_small_object,
  current_user_attributes: {
    vote_score: null;
    can_moderate_kudosu: boolean;
    can_resolve: boolean;
    can_reopen: boolean;
    can_destroy: boolean;
  };
  starting_post: {
    beatmapset_discussion_id: null;
    created_at: string;
    deleted_at: string | null;
    deleted_by_id: number | null;
    id: number | null;
    last_editor_id: number | null;
    message: string;
    system: boolean;
    updated_at: string;
    user_id: number | null;
  };
};

export interface ds_all_object {
  beatmaps: BmShort[];
  cursor: {
    page: number;
    limit: number;
  };
  discussions: discussions_full_object[]
};

export interface ds_posts_object {
  beatmapsets: beatmaps_small_object[];
  discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id: number;
    user_id: number;
    deleted_by_id: number | null;
    message_type: string;
    parent_id: number | null;
    timestamp: string | null;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    last_post_at: string;
    kudosu_denied: boolean;
  }[];
  cursor: null;
  posts: {
    beatmapset_discussion_id: number;
    created_at: string;
    deleted_at: string | null;
    deleted_by_id: number | null;
    id: number;
    last_editor_id: number | null;
    message: string;
    system: boolean;
    updated_at: string;
    user_id: number;
  }[];
};

export interface ds_votes_object {
  cursor: null;
  discussions: {
    id: number;
    beatmapset_id: number;
    beatmap_id: number;
    user_id: number;
    deleted_by_id: number | null;
    message_type: string;
    parent_id: number | null;
    timestamp: string | null;
    resolved: boolean;
    can_be_resolved: boolean;
    can_grant_kudosu: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    last_post_at: string;
    kudosu_denied: boolean;
  }[];
  users: user_small[];
  votes: {
    beatmapset_discussion_id: number;
    created_at: string;
    id: number;
    score: number;
    updated_at: string;
    user_id: number;
  }[];
};

export interface _discussions {
  all(obj: {
    beatmap_id?: number,
    beatmapset_id?: number,
    beatmapset_status?: 'all' | 'ranked' | 'qualified' | 'disqualified' | 'never_qualified' | 'loved',
    limit?: number,
    message_types?: ['suggestion' | 'problem' | 'mapper_note' | 'praise' | 'hype' | 'review' | 'all'],
    only_unresolved?: boolean,
    page?: number,
    sort?: 'id_desc' | 'id_asc',
    user?: number,
    // with_deleted: number,
  }): Promise<ds_all_object>;
  posts(obj: {
    beatmapset_discussion_id?: number,
    limit?: number,
    page?: number,
    sort?: 'id_desc' | 'id_asc',
    types?: ['first' | 'replay' | 'system'],
    user?: number,
    // with_deleted: number,
  }): Promise<ds_posts_object>;
  votes(obj: {
    beatmapset_discussion_id?: number,
    limit?: number,
    page?: number,
    receiver?: number,
    score?: 1 | -1,
    sort?: 'id_desc' | 'id_asc',
    user?: number,
    // with_deleted: number,
  }): Promise<ds_votes_object>;
};

/* ====  DISCUSSIONS END  ==== */


/* ====  SEASONAL START  ==== */

export interface seasonal_object {
  ends_at: string;
  backgrounds: {
    url: string;
    user: user_small;
  }[];
};

export interface _seasonal {
  (): Promise<seasonal_object>;
};

/* ====  SEASONAL END  ==== */


/* ====  WIKI START  ==== */

export interface wiki_object {
  available_locales: string[];
  layout: string;
  locale: string;
  markdown: string;
  path: string;
  subtitle: string | null;
  tags: string[],
  title: string;
};

export interface _wiki {
  (language: string, path: string): Promise<wiki_object>;
};

/* ====  WIKI END  ==== */


/* ====  SEARCH START  ==== */

export interface search_object {
  user?: {
    data: user_small[]
  };
  wiki_page?: {
    data: wiki_object[]
  };
};

export interface _search {
  (obj: { mode?: 'all' | 'user' | 'wiki_page', query?: string, page?: number }): Promise<search_object>;
};

/* ====  SEARCH END  ==== */


/* ====  COMMENTS START  ==== */

export interface comment_object {
  id: number;
  parent_id: number | null;
  user_id: number;
  pinned: boolean;
  replies_count: number;
  votes_count: number;
  commentable_type: string;
  commentable_id: number;
  legacy_name: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  edited_at: string | null;
  edited_by_id: number | null;
  message: string;
  message_html: string;
};

export interface comments_all_object {
  comments: comment_object[];
  has_more: boolean;
  has_more_id: number | null;
  included_comments: comment_object[];
  pinned_comments: comment_object[];
  user_votes: [];
  user_follow: boolean;
  users: user_small[];
  sort: string;
  cursor: {
    created_at: string;
    id: number;
  },
  top_level_count: number;
  total: number;
};

export interface _comments {
  all(obj: {
    commentable_type?: 'news_post' | 'beatmapset',
    commentable_id?: string,
    cursor?: {
      id: number;
      created_at: string;
    },
    parent_id?: string,
    sort?: 'new' | 'old' | 'top',
  }): Promise<comments_all_object>;
  one(comment: string): Promise<comments_all_object>;
};

/* ====  COMMENTS END  ==== */


/* ====  USERS START  ==== */

export interface _users {
  (ids: Array<number>): Promise<user_rulesets>;
};

/* ====  USERS END  ==== */


/* ====  ME START  ==== */

export interface _me {
  data(mode: 'osu' | 'fruits' | 'mania' | 'taiko'): Promise<user_data>;
  download_quota(): Promise<any>;
  friends(): Promise<user_friends>;
};

/* ====  ME END  ==== */


/* ====  USER START  ==== */

export interface user_activity_object {
  created_at: string;
  createdAt: string;
  id: number;
  type: string;
  scoreRank?: string;
  rank?: number;
  mode: string;
  beatmap: {
    title: string;
    url: string;
  };
  user: {
    username: string;
    url: string;
  };
};

export interface user_kudosu_object {
  id: number;
  action: string;
  amount: number;
  model: string;
  created_at: string;
  giver: null,
  post: {
    url: string;
    title: string;
  },
  details: {
    event: string;
  }
};

export interface _user {
  get(user: string | number, mode: 'osu' | 'fruits' | 'mania' | 'taiko', key?: 'id' | 'username'): Promise<user_data>;
  activity(user: number, obj: { limit?: number, offset?: string }): Promise<user_activity_object[]>;
  kudosu(user: number, obj: { limit?: number, offset?: string }): Promise<user_kudosu_object[]>;
  beatmaps: {
    loved(user: number, obj: { limit?: number, offset?: string }): Promise<beatmaps_object[]>;
    ranked(user: number, obj: { limit?: number, offset?: string }): Promise<beatmaps_object[]>;
    pending(user: number, obj: { limit?: number, offset?: string }): Promise<beatmaps_object[]>;
    graveyard(user: number, obj: { limit?: number, offset?: string }): Promise<beatmaps_object[]>;
    favourite(user: number, obj: { limit?: number, offset?: string }): Promise<beatmaps_object[]>;
    most_played(user: number, obj: { limit?: number, offset?: string }): Promise<beatmaps_object[]>;
  };
};

/* ====  USER END  ==== */


/* ====  FORUM START  ==== */

export interface topic_object {
  cursor: {
    id: number;
  };
  posts: {
    created_at: string;
    deleted_at: string | null;
    edited_at: string | null;
    edited_by_id: number | null;
    forum_id: number;
    id: number;
    topic_id: number;
    user_id: number;
    body: {
      html: string;
      raw: string;
    };
  }[];
  search: {
    limit: number;
    sort: string;
  };
  topic: {
    created_at: string;
    deleted_at: string | null;
    first_post_id: number;
    forum_id: number;
    id: number;
    is_locked: boolean;
    last_post_id: number;
    post_count: number;
    title: string;
    type: string;
    updated_at: string;
    user_id: number;
  };
};

export interface _forum {
  topics: {
    all(topic: number, obj: {
      cursor?: {
        id: number;
        created_at: string;
      },
      sort?: 'id_asc' | 'id_desc',
      limit?: number,
      start?: string,
      end?: string,
    }): Promise<topic_object>;
  };
};

/* ====  FORUM END  ==== */


/* ====  NOTIFICATIONS START  ==== */

export interface notification_all_object {
  notifications: {
    id: number;
    name: string;
    created_at: string;
    object_type: string;
    object_id: number;
    source_user_id: number;
    is_read: boolean;
    details: {
      type: string;
      title: string;
      username: string;
      cover_url: string;
    }
  }[];
  stacks: {
    category: string;
    cursor: {
      id: number;
      created_at: string;
    } | null,
    name: string;
    object_type: string;
    object_id: number;
    total: number;
  }[];
  timestamp: string;
  types: {
    cursor: {
      id: number;
    },
    name: string | null;
    total: number;
  }[];
  notification_endpoint: string;
};

export interface _notifications {
  all(max_id?: string): Promise<notification_all_object>;
};

/* ====  NOTIFICATIONS END  ==== */


/* ====  MATCHES START  ==== */

export interface matches_object {
  cursor: {
    match_id: number;
  };
  matches: {
    id: number;
    start_time: string;
    end_time: string | null;
    name: string;
  }[];
  params: {
    limit: number;
    sort: string;
  };
};

export interface match_object {
  match: {
    id: number;
    start_time: string;
    end_time: string | null;
    name: string;
  },
  events: {
    id: number;
    detail: {
      type: string;
    },
    timestamp: string;
    user_id: number;
  }[];
  users: user_country[];
  first_event_id: number;
  latest_event_id: number;
  current_game_id: number | null;
};

export interface _matches {
  all(): Promise<matches_object>;
  one(match: string): Promise<match_object>;
};

/* ====  MATCHES END  ==== */


/* ====  ROOMS START  ==== */

export interface playlist_object {
  id: number;
  room_id: number;
  beatmap_id: number;
  ruleset_id: number;
  allowed_mods: {
    acronym: string;
    settings: {};
  }[];
  required_mods: {
    acronym: string;
    settings: {};
  }[];
  expired: number;
  owner_id: number;
  beatmap: {
    beatmapset_id: number;
    difficulty_rating: number;
    id: number;
    mode: string;
    status: string;
    total_length: number;
    user_id: number;
    version: string;
    beatmapset: {
      artist: string;
      artist_unicode: string;
      covers: covers_object;
      creator: string;
      favourite_count: number;
      hype: {
        current: number;
        required: number;
      },
      id: number;
      nsfw: boolean;
      play_count: number;
      preview_url: string;
      source: string;
      status: string;
      title: string;
      title_unicode: string;
      track_id: number | null;
      user_id: number;
      video: boolean;
    },
    checksum: string;
    max_combo: number;
  }
};

export interface rooms_object {
  id: number;
  name: string;
  category: string;
  type: string;
  user_id: number;
  starts_at: string;
  ends_at: string;
  max_attempts: number | null;
  participant_count: number;
  channel_id: number;
  active: boolean;
  has_password: boolean;
  queue_mode: string;
  host: user_country,
  playlist: playlist_object[];
  recent_participants: user_small[];
};

export interface room_object {
  id: number;
  name: string;
  category: string;
  type: string;
  user_id: number;
  starts_at: string;
  ends_at: string;
  max_attempts: number | null;
  participant_count: number;
  channel_id: number;
  active: boolean;
  has_password: boolean;
  queue_mode: string;
  current_user_score: {
    accuracy: number;
    attempts: number;
    completed: number;
    pp: number;
    room_id: number;
    total_score: number;
    user_id: number;
    playlist_item_attempts: []
  },
  host: user_country;
  playlist: playlist_object,
  recent_participants: user_small[];
};

export interface room_leader_object {
  leaderboard: {
    accuracy: number;
    attempts: number;
    completed: number;
    pp: number;
    room_id: number;
    total_score: number;
    user_id: number;
    user: user_country;
  }[];
  user_score: null
};

export interface _rooms {
  all(): Promise<rooms_object>;
  one(room_id: number): Promise<room_object>;
  leader(room_id: number): Promise<room_leader_object>;
};

/* ====  ROOMS END  ==== */