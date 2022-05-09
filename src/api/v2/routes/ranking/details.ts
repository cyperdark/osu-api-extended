import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Gets the current ranking for the specified type and game mode',
  params: [
    {
      type: 'string',
      name: 'mode',
      optional: false,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string',
      name: 'type',
      optional: false,
      description: '\`\`\`charts\`\`\` or \`\`\`country\`\`\` or \`\`\`performance\`\`\` or \`\`\`score\`\`\`',
    },
    {
      type: 'number',
      name: 'country',
      optional: true,
      description: 'Filter ranking by country code. Only available for \`\`\`type\`\`\` of \`\`\`performance\`\`\`',
    },
    {
      type: 'string',
      name: 'cursorPublished',
      optional: true,
      description: 'Pagination cursorPublished',
    },
    {
      type: 'number',
      name: 'cursorId',
      optional: true,
      description: 'Pagination cursorId',
    },
    {
      type: 'string',
      name: 'filter',
      optional: true,
      description: '\`\`\`all\`\`\` or \`\`\`friends\`\`\`',
    },
    {
      type: 'string',
      name: 'spotlight',
      optional: true,
      description: 'The id of the spotlight if type is charts. Ranking for latest spotlight will be returned if not specified',
    },
    {
      type: 'string',
      name: 'variant',
      optional: true,
      description: `Filter ranking to specified mode variant. For \`\`\`mode\`\`\` of \`\`\`mania\`\`\`, it's either \`\`\`4k\`\`\` or \`\`\`7k\`\`\`. Only available for \`\`\`type\`\`\` of \`\`\`performance\`\`\``,
    },
  ],
};

export interface types {
  (mode: 'osu' | 'fruits' | 'mania' | 'taiko', type: 'charts' | 'country' | 'performance' | 'score', obj: {
    country?: number,
    cursorPublished?: string,
    cursorId?: number
    filter?: 'all' | 'friends',
    spotlight?: string,
    variant?: 'all' | '4k' | '7k',
  }): Promise<response>;
};

export interface response {
  cursor: {
    page: number;
  };
  ranking: {
    level: {
      current: number;
      progress: number;
    };
    global_rank?: number;
    pp?: number;
    ranked_score: number;
    hit_accuracy?: number;
    play_count: number;
    play_time?: number;
    total_score?: number;
    total_hits?: number;
    maximum_combo?: number;
    replays_watched_by_others?: number;
    is_ranked?: boolean;
    grade_counts: {
      ss: number;
      ssh: number;
      s: number;
      sh: number;
      a: number;
    };
    user: {
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
      profile_colour: string;
      username: string;
      country: {
        code: string;
        name: string;
      };
      cover: {
        custom_url: string;
        url: string;
        id: number;
      };
    };
    code?: string;
    active_users?: number;
    performance?: number;
    country: {
      code: string;
      name: string;
    };
  }[];
  total: number;
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
    }[];
  }[];
  spotlight: {
    end_date: string;
    id: number;
    mode_specific: boolean;
    name: string;
    start_date: string;
    type: string;
    participant_count: number;
  };
}



const name: types = async (mode, type, obj) => {
  const data = await request(`rankings/${mode}/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;