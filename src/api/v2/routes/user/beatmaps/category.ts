import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return beatmaps list of specified user',
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      type: 'string',
      name: 'type',
      optional: false,
      description: '\`\`\`favourite\`\`\` or \`\`\`loved\`\`\` or \`\`\`ranked\`\`\` or \`\`\`pending\`\`\` or \`\`\`graveyard\`\`\`',
    },
    {
      type: 'number',
      name: 'limit',
      optional: true,
      description: 'Maximum number of results',
    },
    {
      type: 'number',
      name: 'offset',
      optional: true,
      description: 'Result offset for pagination',
    },
  ],
};

export interface types {
  (user: number, type: 'favourite' | 'loved' | 'ranked' | 'pending' | 'graveyard', obj: { limit?: number, offset?: string }): Promise<response[]>;
};

export interface response {
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
  }[];
  hype: {
    current?: number;
    required?: number;
  };
  ranked_date?: string;
  track_id?: number;
}


const name: types = async (user, type, obj) => {
  const data = await request(`users/${user}/beatmapsets/${type}`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;