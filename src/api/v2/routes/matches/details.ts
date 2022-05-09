import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return match data for specified id',
  params: [
    {
      type: 'number',
      name: 'match',
      optional: false,
      description: 'id of the match',
    },
  ],
};

export interface types {
  (match: number): Promise<response>;
};

export interface response {
  match: {
    id: number;
    start_time: string;
    end_time: string;
    name: string;
  };
  events: {
    id: number;
    detail: {
      type: string;
      text: string;
    };
    timestamp: string;
    user_id?: number;
    game: {
      id: number;
      start_time: string;
      end_time: string;
      mode: string;
      mode_int: number;
      scoring_type: string;
      team_type: string;
      mods: [];
      beatmap: {
        beatmapset_id: number;
        difficulty_rating: number;
        id: number;
        mode: string;
        status: string;
        total_length: number;
        user_id: number;
        version: string;
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
          hype: string;
          id: number;
          nsfw: boolean;
          offset: number;
          play_count: number;
          preview_url: string;
          source: string;
          status: string;
          title: string;
          title_unicode: string;
          track_id: number;
          user_id: number;
          video: boolean;
        };
      };
      scores: {
        accuracy: number;
        best_id?: string;
        created_at: string;
        id?: string;
        max_combo: number;
        mode: string;
        mode_int: number;
        mods: string[];
        passed: boolean;
        perfect: number;
        pp?: string;
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
        match: {
          slot: number;
          team: string;
          pass: boolean;
        };
      }[];
    };
  }[];
  users: {
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
    profile_colour?: string;
    username: string;
    country: {
      code: string;
      name: string;
    };
  };
  first_event_id: number;
  latest_event_id: number;
  current_game_id: string;
}



const name: types = async (match) => {
  const data = await request(`matches/${match}`, {
    method: 'GET',
  });

  return data;
};


export default name;