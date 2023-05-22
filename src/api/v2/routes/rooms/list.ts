// import { types } from '../../../../types/v2_matches_list';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: '',
  params: [
    {
      type: 'string',
      name: 'mode',
      optional: false,
      description: '\`\`\`all\`\`\` or \`\`\`owned\`\`\` or \`\`\`participated\`\`\` or \`\`\`ended\`\`\`',
    },
    {
      name: 'object',
      optional: true,
      params: [
        {
          type: 'string',
          name: 'category',
          optional: true,
          description: '\`\`\`normal\`\`\` or \`\`\`spotlight\`\`\` or \`\`\`featured_artist\`\`\`',
        },
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Number of results',
        },
        {
          type: 'number',
          name: 'season_id',
          optional: true,
          description: 'season_id',
        },
        {
          type: 'string',
          name: 'type_group',
          optional: true,
          description: '\`\`\`playlists\`\`\` or \`\`\`realtime\`\`\`',
        },
      ],
    }
  ],
};

export interface types {
  (mode: 'all' | 'owned' | 'participated' | 'ended', object?: {
  }): Promise<response>;
};

export interface response {
  ask: 'peppy',
}


const name: types = async (mode, object) => {
  //@ts-ignore
  object.mode = mode;
  const data = await request(`rooms/${mode == 'all' ? 'ended' : mode}`, {
    method: 'GET',
    params: object,
  });

  return data;
};


export default name;