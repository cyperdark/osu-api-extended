import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of all user scores on a beatmap',
  params: [
    {
      type: 'number',
      name: 'beatmap',
      optional: false,
      description: 'id of the beatmap',
    },
    {
      type: 'string/number',
      name: 'user',
      optional: true,
      description: 'id of the user',
    },
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
  ],
};

export interface types {
  (beatmap: number, user: number, mode?: 'osu' | 'fruits' | 'mania' | 'taiko'): Promise<response>;
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
    pp: number;
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
      pin: {
        is_pinned: boolean;
        score_id: number;
        score_type: string;
      };
    };
  }[]
}


const name: types = async (beatmap, user, mode) => {
  const data = await request(`beatmaps/${beatmap}/scores/users/${user}/all`, {
    method: 'GET',
    params: { mode },
  });

  return data;
};


export default name;