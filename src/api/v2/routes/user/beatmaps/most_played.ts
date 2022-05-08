import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of user most played beatmaps',
  params: [
    {
      type: 'number',
      name: 'user',
      optional: false,
      description: 'id of the user',
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
  (user: number, obj: { limit?: number, offset?: string }): Promise<response[]>;
};

export interface response {
  beatmap_id: number;
  count: number;
  beatmap: {
    beatmapset_id: number;
    difficulty_rating: number;
    id: number;
    mode: string;
    status: string;
    total_length: number;
    user_id: number;
    version: string;
  };
  beatmapset: {
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
  };
}


const name: types = async (user, obj) => {
  const data = await request(`users/${user}/beatmapsets/most_played`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;