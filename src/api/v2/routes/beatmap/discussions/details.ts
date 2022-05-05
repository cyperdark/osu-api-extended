import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (obj: {
    beatmap_id?: number,
    beatmapset_id?: number,
    beatmapset_status?: 'all' | 'ranked' | 'qualified' | 'disqualified' | 'never_qualified' | 'loved',
    limit?: number,
    message_types?: ['suggestion' | 'problem' | 'mapper_note' | 'praise' | 'hype' | 'review' | 'all'],
    only_unresolved?: boolean,
    page?: number,
    sort?: 'id_desc' | 'id_asc',
    user?: number,
    // with_deleted: number,
  }): Promise<{
    beatmaps: {
      beatmapset_id: number;
      difficulty_rating: number;
      id: number;
      mode: string;
      status: string;
      total_length: number;
      user_id: number;
      version: string;
      accuracy: number;
      ar: number;
      bpm: number;
      convert: boolean;
      count_circles: number;
      count_sliders: number;
      count_spinners: number;
      cs: number;
      deleted_at: string;
      drain: number;
      hit_length: number;
      is_scoreable: boolean;
      last_updated: string;
      mode_int: number;
      passcount: number;
      playcount: number;
      ranked: number;
      url: string;
      checksum: string;
    }[];
    discussions: {
      id: number;
      beatmapset_id: number;
      user_id: number;
      message_type: string;
      resolved: boolean;
      can_be_resolved: boolean;
      can_grant_kudosu: boolean;
      created_at: string;
      updated_at: string;
      last_post_at: string;
      kudosu_denied: boolean;
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
        hype: {
          current: number;
          required: number;
        };
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
        track_id: number;
      };
      current_user_attributes: {
        vote_score: number;
        can_moderate_kudosu: boolean;
        can_resolve: boolean;
        can_reopen: boolean;
        can_destroy: boolean;
      };
      starting_post: {
        beatmapset_discussion_id: number;
        created_at: string;
        id: number;
        message: string;
        system: boolean;
        updated_at: string;
        user_id: number;
      };
      beatmap_id: number;
      timestamp: number;
    }[];
    included_discussions: [];
    reviews_config: {
      max_blocks: number;
    };
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
      pm_friends_only: boolean;
      profile_colour: string;
      username: string;
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
      last_visit: string;
    }[];
    cursor: {
      page: number;
      limit: number;
    };
    cursor_string: string;
  }>;
};


const name: types = async (obj) => {
  const data = await request(`beatmapsets/discussions`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;