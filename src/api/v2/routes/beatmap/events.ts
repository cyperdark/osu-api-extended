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
      description: '\`\`\`nominate\`\`\` or \`\`\`qualify\`\`\` or \`\`\`rank\`\`\` or \`\`\`love\`\`\` or \`\`\`nomination_reset\`\`\` or \`\`\`nomination_reset_received\`\`\` or \`\`\`disqualify\`\`\` or \`\`\`remove_from_loved\`\`\` or \`\`\`kudosu_gain\`\`\` or \`\`\`kudosu_lost\`\`\` or \`\`\`genre_edit\`\`\` or \`\`\`language_edit\`\`\` or \`\`\`nsfw_toggle\`\`\` or \`\`\`offset_edit\`\`\` or \`\`\`issue_resolve\`\`\` or \`\`\`issue_reopen\`\`\` or \`\`\`beatmap_owner_change\`\`\` or \`\`\`kudosu_allow\`\`\` or \`\`\`kudosu_deny\`\`\` or \`\`\`approve\`\`\` or \`\`\`kudosu_recalculate\`\`\` or \`\`\`discussion_delete\`\`\` or \`\`\`discussion_restore\`\`\` or \`\`\`discussion_post_delete\`\`\` or \`\`\`discussion_post_restore\`\`\`',
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
    types?: ["nominate" | "qualify" | "rank" | "love" | "nomination_reset" | "nomination_reset_received" | "disqualify" | "remove_from_loved" | "kudosu_gain" | "kudosu_lost" | "genre_edit" | "language_edit" | "nsfw_toggle" | "offset_edit" | "issue_resolve" | "issue_reopen" | "beatmap_owner_change" | "kudosu_allow" | "kudosu_deny" | "approve" | "kudosu_recalculate" | "discussion_delete" | "discussion_restore" | "discussion_post_delete" | "discussion_post_restore"],
    min_date?: string,
    max_date?: string,
  }): Promise<response>;
};

export interface response {
  events: {
    id: number;
    type: string;
    comment: {
      beatmap_discussion_id: string;
      beatmap_discussion_post_id: string;
      old: string;
      new: string;
      new_vote: {
        user_id: number;
        score: number;
      };
      votes: {
        user_id: number;
        score: number;
      }[];
      modes: string[];
      nominator_ids: number[];
      source_user_id: number;
      source_user_username: string;
      reason: string;
      beatmap_id: number;
      beatmap_version: string;
      new_user_id: number;
      new_user_username: string;
    };
    created_at: string;
    user_id?: number;
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
      track_id: string;
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
        last_visit: string;
        pm_friends_only: boolean;
        profile_colour: string;
        username: string;
      };
    };
    discussion: {
      id: number;
      beatmapset_id: number;
      beatmap_id: number;
      user_id: number;
      deleted_by_id: string;
      message_type: string;
      parent_id: string;
      timestamp: number;
      resolved: boolean;
      can_be_resolved: boolean;
      can_grant_kudosu: boolean;
      created_at: string;
      updated_at: string;
      deleted_at: string;
      last_post_at: string;
      kudosu_denied: boolean;
      starting_post: {
        beatmapset_discussion_id: number;
        created_at: string;
        deleted_at: string;
        deleted_by_id: string;
        id: number;
        last_editor_id: string;
        message: string;
        system: boolean;
        updated_at: string;
        user_id: number;
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
    last_visit?: string;
    pm_friends_only: boolean;
    profile_colour?: string;
    username: string;
    groups: {
      colour?: string;
      has_listing: boolean;
      has_playmodes: boolean;
      id: number;
      identifier: string;
      is_probationary: boolean;
      name: string;
      short_name: string;
      playmodes: string[];
    };
  }[];
}



const name: types = async (obj) => {
  const data = await request(`beatmapsets/events`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;