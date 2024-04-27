import { IError } from "../../../../types";
import { request } from "../../../../utility/request";
import form from "../../form/user/details";


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
  description: 'Return user details',
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

type Response = response[] & IError;

export interface types {
  (user: string | number, obj?: {
    mode?: 'osu' | 'fruits' | 'mania' | 'taiko',
    type?: 'u' | 'id',
    event_days?: number
  }): Promise<Response>;
};

export interface response {
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
    50: number;
    100: number;
    300: number;
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
  events: {
    display: {
      html: string;
      pure: string;
    };
    id: {
      diff: number;
      set: number;
    };
    date: string;
    epicfactor: number;
  };
}



const name: types = async (user, obj = {}) => {
  const params = {
    u: user,
    m: _mode.indexOf(obj.mode),
    type: obj.type,
    event_days: obj.event_days,
  };
  if (params.m == -1) delete params.m;


  const data = await request(`https://osu.ppy.sh/api/get_user`, {
    method: 'GET',
    params: params,
  });

  if (data.length == 0) return { error: new Error('User not found') };

  const format = form(data);
  return format;
};


export default name;