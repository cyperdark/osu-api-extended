import { request, namespace, RequestNamepsace } from "../../../../utility/request";
// const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 3,
  title: __filename,
  method: 'GET',
  description: 'Return array of users from specified group id',
  params: [
    {
      type: 'number',
      name: 'id',
      optional: false,
      description: '\`\`\`4\`\`\` or \`\`\`7\`\`\` or \`\`\`11\`\`\` or \`\`\`16\`\`\` or \`\`\`22\`\`\` or \`\`\`28\`\`\` or \`\`\`31\`\`\` or \`\`\`32\`\`\`',
    },
  ],
};

export interface types {
  (id: 4 | 7 | 11 | 16 | 22 | 28 | 31 | 32): Promise<{
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
    groups: {
      colour: string;
      has_listing: boolean;
      has_playmodes: boolean;
      id: number;
      identifier: string;
      is_probationary: boolean;
      name: string;
      short_name: string;
      playmodes: object;
    }[];
    statistics: {
      level: {
        current: number;
        progress: number;
      };
      pp: number;
      ranked_score: number;
      hit_accuracy: number;
      play_count: number;
      play_time: number;
      total_score: number;
      total_hits: number;
      maximum_combo: number;
      replays_watched_by_others: number;
      is_ranked: boolean;
      grade_counts: {
        ss: number;
        ssh: number;
        s: number;
        sh: number;
        a: number;
      };
      global_rank: number;
    };
    support_level: number;
    profile_colour: string;
  }[]>;
};

export interface response {
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
  groups: {
    colour: string;
    has_listing: boolean;
    has_playmodes: boolean;
    id: number;
    identifier: string;
    is_probationary: boolean;
    name: string;
    short_name: string;
    playmodes: object;
  }[];
  statistics: {
    level: {
      current: number;
      progress: number;
    };
    pp: number;
    ranked_score: number;
    hit_accuracy: number;
    play_count: number;
    play_time: number;
    total_score: number;
    total_hits: number;
    maximum_combo: number;
    replays_watched_by_others: number;
    is_ranked: boolean;
    grade_counts: {
      ss: number;
      ssh: number;
      s: number;
      sh: number;
      a: number;
    };
    global_rank: number;
  };
  support_level: number;
  profile_colour: string;
};


const name: types = async (id) => {
  const data = await request(`https://osu.ppy.sh/groups/${id}`, {
    method: 'GET',
  });

  const parse = data.split('<script id="json-users" type="application/json">')[1].split('</script>')[0];

  return JSON.parse(parse);
};


export default name;