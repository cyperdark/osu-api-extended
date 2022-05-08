import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return list of beatmaps events (Nominations, bubbles and etc)',
  params: [
    {
      type: 'string/number',
      name: 'user',
      optional: true,
      description: 'id of the user',
    },
    {
      type: 'string array',
      name: 'types',
      optional: true,
      description: '\`\`\`nominate\`\`\` or \`\`\`qualify\`\`\` or \`\`\`rank\`\`\` or \`\`\`love\`\`\` or \`\`\`nomination_reset\`\`\` or \`\`\`nomination_reset_received\`\`\` or \`\`\`disqualify\`\`\` or \`\`\`remove_from_loved\`\`\` or \`\`\`kudosu_gain\`\`\` or \`\`\`kudosu_lost\`\`\` or \`\`\`genre_edit\`\`\` or \`\`\`language_edit\`\`\` or \`\`\`nsfw_toggle\`\`\` or \`\`\`issue_resolve\`\`\` or \`\`\`issue_reopen\`\`\` or \`\`\`beatmap_owner_change\`\`\`',
    },
    {
      type: 'string',
      name: 'min_date',
      optional: true,
      description: 'Date from',
    },
    {
      type: 'string',
      name: 'max_date',
      optional: true,
      description: 'Date to',
    },
  ],
};

export interface types {
  (obj: {
    user?: string | number,
    types?: ['nominate' | 'qualify' | 'rank' | 'love' | 'nomination_reset' | 'nomination_reset_received' | 'disqualify' | 'remove_from_loved' | 'kudosu_gain' | 'kudosu_lost' | 'genre_edit' | 'language_edit' | 'nsfw_toggle' | 'issue_resolve' | 'issue_reopen' | 'beatmap_owner_change'],
    min_date?: string,
    max_date?: string,
  }): Promise<response>;
};

export interface response {
  events: {
    id: number;
    type: string;
    comment: {
      beatmap_id: number;
      beatmap_version: string;
      new_user_id: number;
      new_user_username: string;
      beatmap_discussion_id: number;
      beatmap_discussion_post_id: number;
      new_vote: {
        user_id: number;
        score: number;
      };
      votes: {
        user_id: number;
        score: number;
      }[];
      old: string;
      new: string;
    };
    created_at: string;
    user_id: number;
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
      user: {
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
        username: string;
        last_visit: string;
        profile_colour: string;
      };
      track_id: number;
    };
    discussion: {
      id: number;
      beatmapset_id: number;
      beatmap_id: number;
      user_id: number;
      message_type: string;
      timestamp: number;
      resolved: boolean;
      can_be_resolved: boolean;
      can_grant_kudosu: boolean;
      created_at: string;
      updated_at: string;
      last_post_at: string;
      kudosu_denied: boolean;
      starting_post: {
        beatmapset_discussion_id: number;
        created_at: string;
        id: number;
        message: string;
        system: boolean;
        updated_at: string;
        user_id: number;
        last_editor_id: number;
      };
    };
  }[];
  reviewsConfig: {
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
    last_visit: string;
    pm_friends_only: boolean;
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
    profile_colour: string;
  }[];
};


const name: types = async (obj) => {
  const data = await request(`beatmapsets/events`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;