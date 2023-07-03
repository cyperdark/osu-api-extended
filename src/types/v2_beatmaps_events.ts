export interface response {
  events: {
    id: number;
    type: string;
    comment: {
      beatmap_discussion_id: string;
      beatmap_discussion_post_id: string;
      beatmap_id: number;
      beatmap_version: string;
      new_user_id: number;
      new_user_username: string;
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
      spotlight: boolean;
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
      colour: string;
      has_listing: boolean;
      has_playmodes: boolean;
      id: number;
      identifier: string;
      is_probationary: boolean;
      name: string;
      short_name: string;
      playmodes: string[];
    }[];
  }[];
}


export interface types {
  /**
   * Return list of beatmaps events (Nominations, bubbles and etc)
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login(CLIENT_ID, CLIENT_SECRET);
   *
   *   const v2_beatmaps_events = await v2.beatmaps.events(object);
   *   console.log(v2_beatmaps_events);
   * };
   * 
   * main();
   * ```
   * @param {string|number} object.user id of the user
   * @param {string[]} object.types ```nominate``` or ```qualify``` or ```rank``` or ```love``` or ```nomination_reset``` or ```nomination_reset_received``` or ```disqualify``` or ```remove_from_loved``` or ```kudosu_gain``` or ```kudosu_lost``` or ```genre_edit``` or ```language_edit``` or ```nsfw_toggle``` or ```offset_edit``` or ```issue_resolve``` or ```issue_reopen``` or ```beatmap_owner_change``` or ```kudosu_allow``` or ```kudosu_deny``` or ```approve``` or ```kudosu_recalculate``` or ```discussion_delete``` or ```discussion_restore``` or ```discussion_post_delete``` or ```discussion_post_restore```
   * @param {string} object.min_date Date from
   * @param {string} object.max_date Date to
  */
  (object: {user?: string | number, types?: Array<'nominate' | 'qualify' | 'rank' | 'love' | 'nomination_reset' | 'nomination_reset_received' | 'disqualify' | 'remove_from_loved' | 'kudosu_gain' | 'kudosu_lost' | 'genre_edit' | 'language_edit' | 'nsfw_toggle' | 'offset_edit' | 'issue_resolve' | 'issue_reopen' | 'beatmap_owner_change' | 'kudosu_allow' | 'kudosu_deny' | 'approve' | 'kudosu_recalculate' | 'discussion_delete' | 'discussion_restore' | 'discussion_post_delete' | 'discussion_post_restore' >, min_date?: string, max_date?: string, }): Promise<response[]>;
}
