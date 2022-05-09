import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return scores from specified beatmap',
  params: [
    {
      type: 'number',
      name: 'beatmap',
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
      type: 'string array',
      name: 'mods',
      optional: true,
      description: 'Array of matching mods [\'HD\', \'DT\']',
    },
    {
      type: 'string',
      name: 'type',
      optional: true,
      description: '?Beatmap score ranking type',
    },
  ],
};

export interface types {
  (beatmap: number, obj: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    mods?: string[],
    type?: string,
  }): Promise<response>;
};

export interface response {
  scores: {
    accuracy: number;
    best_id: number;
    created_at: string;
    id: number;
    max_combo: number;
    mode: string;
    mode_int: number;
    mods: string[];
    passed: boolean;
    perfect: boolean;
    pp?: number;
    rank: string;
    replay: boolean;
    score: number;
    statistics: {
      count_100: number;
      count_300: number;
      count_50: number;
      count_geki: number;
      count_katu: number;
      count_miss: number;
    };
    user_id: number;
    current_user_attributes: {
      pin: string;
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
        id: string;
      };
    };
  }[];
}



const name: types = async (beatmap, obj) => {
  const data = await request(`beatmaps/${beatmap}/scores`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;