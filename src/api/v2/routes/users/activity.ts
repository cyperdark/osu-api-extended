import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of recent user activity',
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
    },
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of results',
        },
        {
          type: 'string',
          name: 'offset',
          optional: true,
          description: 'Result offset for pagination',
        },
      ]
    },
  ],
};

export interface types {
  /**
   * Return list of recent user activity
   * 
   * ## Example 
   * 
   * ```js
   * const { auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);

  *   const v2_users_activity = await v2.v2.users.activity(user, object);
  *   console.log(v2_users_activity);
  * };
  * 
  * main();
  * ```
  * @param {number} user id of the user
  * @param {number} object.limit undefined
  * @param {string} object.offset undefined
  */
  (user: number, obj: { limit?: number, offset?: string }): Promise<response[]>;
};

export interface response {
  created_at: string;
  createdAt: string;
  id: number;
  type: string;
  mode: string;
  beatmap: {
    title: string;
    url: string;
  };
  user: {
    username: string;
    url: string;
  };
  scoreRank: string;
  rank: number;
  achievement: {
    icon_url: string;
    id: number;
    name: string;
    grouping: string;
    ordering: number;
    slug: string;
    description: string;
    mode: string;
    instructions: string;
  };
  approval: string;
  beatmapset: {
    title: string;
    url: string;
  };
}



const name: types = async (user, obj = {}) => {
  const data = await request(`users/${user}/recent_activity`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;