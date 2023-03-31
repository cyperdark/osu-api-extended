import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'POST',
  description: 'Return attributes (stars, combo, stats) of beatmap',
  params: [
    {
      type: 'number',
      name: 'beatmap_id',
      optional: false,
      description: 'Beatmap id',
    },
    {
      name: 'body',
      params: [
        {
          type: 'string array',
          name: 'mods',
          optional: true,
          description: 'Array of matching mods [\'HD\', \'DT\']',
        },
        {
          type: 'string',
          name: 'ruleset',
          optional: true,
          description: `\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\``,
        },
        {
          type: 'number',
          name: 'ruleset_id',
          optional: true,
          description: `\`\`\`0\`\`\` or \`\`\`1\`\`\` or \`\`\`2\`\`\` or \`\`\`3\`\`\``,
        },
      ]
    },
  ],
};


export interface types {
  (beatmap_id: number, body: {
    mods?: string[],
    ruleset?: 'osu' | 'fruits' | 'mania' | 'taiko',
    ruleset_id?: number,
  }): Promise<response>;
};

export interface response {
  attributes: {
    star_rating: number;
    max_combo: number;
    aim_difficulty: number;
    speed_difficulty: number;
    flashlight_difficulty: number;
    slider_factor: number;
    approach_rate: number;
    overall_difficulty: number;
  };
}


const name: types = async (beatmap_id, body) => {
  const data = await request(`beatmaps/${beatmap_id}/attributes`, {
    method: 'POST',
    data: JSON.stringify(body),
  });

  return data;
};


export default name;