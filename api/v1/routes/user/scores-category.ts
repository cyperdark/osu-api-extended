import { namespace, RequestNamespace } from "../../../../utility/request";
import { id as mods_id } from "../../../../utility/mods";
import form_best from "../../form/user/best";
import form_recent from "../../form/user/recent";

const request: RequestNamespace = namespace('https://osu.ppy.sh/api/');

const _mode = [
  'osu',
  'taiko',
  'fruits',
  'mania',
];


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return scores from user for a specified type',
  params: [
    {
      type: 'string',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string',
      name: 'type',
      optional: true,
      description: '\`\`\`u\`\`\` is a user_id or a username. Use string for usernames or \`\`\`id\`\`\` for user_ids',
    },
    {
      type: 'string',
      name: 'event_days',
      optional: true,
      description: 'Max number of days between now and last event date. Range of 1-31. Optional, default value is 1',
    },
  ],
};

export interface types {
  (user: string | number, type: 'best' | 'recent', obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    type?: 'u' | 'id',
    limit?: number,
  }): Promise<response[]>;
};

export interface response {
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
  hits: number[];
  mods: {
    id: number;
    name: string;
  };
  accuracy: number;
  pp: number;
  replay: number;
}



const name: types = async (user, type, obj = {}) => {
  const params = {
    u: user,
    m: _mode.indexOf(obj.mode),
    type: obj.type,
    limit: obj.limit,
  };

  const data = await request(`get_user_${type}`, {
    method: 'GET',
    params: params,
  });

  if (data.length == 0) return null;

  if (type == 'best') {
    const format = form_best(data, obj.mode);
    return format;
  };

  const format = form_recent(data, obj.mode);
  return format;
};


export default name;