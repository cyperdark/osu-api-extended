import { beatmaps_events_list } from "../api/v2/beatmaps_events_list";
import { beatmaps_lookup } from "../api/v2/beatmaps_lookup";
import { beatmaps_details } from "../api/v2/beatmaps_details";
import { beatmaps_download } from "../api/v2/beatmaps_download";
import { beatmaps_packs_list } from "../api/v2/beatmaps_packs_list";
import { beatmap_packs_details } from "../api/v2/beatmaps_packs_details";
import { beatmaps_discussions_list } from "../api/v2/beatmaps_discussions_list";
import { beatmaps_discussions_posts } from "../api/v2/beatmaps_discussions_posts";
import { beatmaps_discussions_votes } from "../api/v2/beatmaps_discussions_votes";

import beatmaps_actions from "../api/v2/beatmaps_actions";


/**
 * ##### Description
 * Object containing methods for retrieving beatmaps data.
 */
export const beatmaps = {
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap packs.
   *
   */
  packs: {
    /**
     * ### `GET` [/v2/beatmaps/packs](https://osu.ppy.sh/docs/index.html#get-beatmap-packs)
     * `async` Retrieves a list of all available beatmap packs.
     *
     * &nbsp;
     *
     * ## Parameters
     * - `params.type` - Type of the beatmap pack.
     * - `params.cusor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * // TBA
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmap-packs) | [Check return types](../types/v2/beatmaps_packs_list.ts)
     */
    list: beatmaps_packs_list,
    /**
     * ### `GET` [/v2/beatmaps/packs/{pack_tag}](https://osu.ppy.sh/docs/index.html#get-beatmap-pack)
     * `async` Retrieves a beatmap pack by given ID.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `pack_tag` - ID of the beatmap pack to retrieve.
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * // TBA
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmap-pack) | [Check return types](../types/v2/beatmaps_packs_details.ts)
     */
    details: beatmap_packs_details,
  },
  /**
   * ### `GET` [/v2/beatmaps/lookup](https://osu.ppy.sh/docs/index.html#lookup-beatmap)
   * ### `GET` [/v2/beatmapsets/lookup](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetslookup)
   * ### `POST` [/v2/beatmaps/{beatmap}/attributes](https://osu.ppy.sh/docs/index.html#get-beatmap-attributes)
   * ### `GET` [/v2/beatmaps](https://osu.ppy.sh/docs/index.html#get-beatmaps)
   * `async` Lookup for a beatmap by given parameters.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of lookup.
   *
   * & &nbsp;
   *
   * ### Parameters for `params.type:'difficulty'`
   * - `params.id` - ID of the difficulty to lookup for.
   * - `params.checksum` - Checksum of the difficulty to lookup.
   * - `params.filename` - Filename of the difficulty to lookup.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'set'`
   * - `params.id` - ID of the beatmap set to lookup for.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'attribute'`
   * - `params.id` - ID of the beatmap to lookup for.
   * - `params.mods` - Mod combination of the beatmap to lookup for.
   * - `params.mode` - Mode of the beatmap to lookup for.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'difficulties'`
   * - `params.ids` - IDs of the difficulties to lookup for.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * // TBA
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://osu.ppy.sh/docs/index.html#lookup-beatmap) | [Check return types](../types/v2/beatmaps_lookup.ts)
   */
  lookup: beatmaps_lookup,
  /**
   * ### `GET` [v2/beatmaps/{beatmap}](https://osu.ppy.sh/docs/index.html#get-beatmap)
   * ### `GET` [v2/beatmapsets/{beatmapset}](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetsbeatmapset)
   * `async` Retrieves a beatmap or beatmap set by given ID.
   *
   * &nbsp;
   *
   * ##### Parameters
   * - `params.type` - The type to search for.
   * - `params.id` - The ID to search for.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```js
   * // TBA
   * ```
   *
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmap) | [Check return types](../types/v2/beatmaps_details.ts)
   */
  details: beatmaps_details,
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap set events.
   */
  events: {
    /**
     * ##### Description
     * Request `GET` https://osu.ppy.sh/api/v2/beatmapsets/events
     *
     * `async` Retrieves a list of beatmap set events.
     *
     * @param obj - Object containing parameters to include in the request.
     * @param obj.user - Filter by author of the event.
     * @param obj.types - Filter by type of the event.
     * @param obj.min_date - Filter by minimum date of the event.
     * @param obj.max_date - Filter by maximum date of the event.
     * @param [addons] - Additional parameters to include in the request.
     *
     * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
     */
    list: beatmaps_events_list,
  },
  /**
   * ##### Description
   *
   * `async` Downloads a beatmap or beatmap set by given ID. (Supports different hosts)
   *
   * Check documentation for available parameters.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  download: beatmaps_download,
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap discussions.
   */
  discussions: {
    /**
     * ##### Description
     * Request `GET` https://osu.ppy.sh/api/v2/beatmapsets/discussions
     *
     * `async` Retrieves a list of beatmap set discussions.
     *
     * @param params - Parameters to include in the request.
     * @param [params.only_unresolved] - Filter by unresolved discussions.
     * @param [params.user] - Filter by author of the discussion.
     * @param [params.beatmap_id] - Filter by beatmap ID.
     * @param [params.beatmapset_id] - Filter by beatmap set ID.
     * @param [params.beatmapset_status] - Filter by beatmap set status.
     * @param [params.message_type] - Filter by message type.
     * @param [params.limit] - Maximum number of discussions to return.
     * @param [params.sort] - Sort order of the discussions.
     * @param [params.cursor_string] - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * @param addons - Additional parameters to include in the request.
     *
     * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
     */
    list: beatmaps_discussions_list,
    /**
     * ##### Description
     * Request `GET` https://osu.ppy.sh/api/v2/beatmapsets/discussions/posts
     *
     * `async` Retrieves the posts of a beatmap set discussion.
     *
     * @param {Object} params - Parameters to include in the request.
     * @param [params.discussion_id] - ID of the beatmap set discussion to retrieve.
     * @param [params.sort] - Sort order of the posts.
     * @param [params.type] - Filter by type of the post.
     * @param [params.limit]- Maximum number of posts to return.
     * @param [params.user] - Filter by author of the post.
     * @param [params.cursor_string] - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * @param [addons] - Additional parameters to include in the request.
     *
     * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
     */
    posts: beatmaps_discussions_posts,
    /**
     * ##### Description
     * Request `GET` https://osu.ppy.sh/api/v2/beatmapsets/discussions/votes
     *
     * `async` Retrieves the votes given to beatmap set discussions.
     *
     * @param params - Parameters to include in the request.
     * @param [params.discussion_id] - ID of the beatmap set discussion to retrieve.
     * @param [params.sort] - Sort order of the votes.
     * @param [params.score] - Filter by score of the vote.
     * @param [params.user] - Filter by author of the vote.
     * @param [params.receiver] - Filter by receiver of the vote.
     * @param [params.limit] - Maximum number of votes to return.
     * @param [params.cursor_string] - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * @param [addons] - Additional parameters to include in the request.
     *
     * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
     */
    votes: beatmaps_discussions_votes,
  },
  actions: beatmaps_actions,
};




import { changelogs_list } from '../api/v2/changelogs_list';
import { changelogs_details } from '../api/v2/changelogs_details';

/**
 * ##### Description
 * Covers API Endpoints regarding changelogs.
 */
export const changelogs = {
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/changelogs
   *
   * `async` Retrieves a list of all available changelogs.
   *
   * Check documentation for available parameters.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  list: changelogs_list,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/changelogs
   *
   * `async` Retrieves a changelog by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param params.stream_name - Filter by changelog stream name.
   * @param params.build_version - Filter by build version.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  details: changelogs_details,
};




import { comments_list } from '../api/v2/comments_list';
import { comments_details } from '../api/v2/comments_details';
import { comments_actions } from '../api/v2/comments_actions';

/**
 * ##### Description
 * Covers API Endpoints regarding comments.
 */
export const comments = {
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/comments
   *
   * `async` Retrieves a list of all comments by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param [params.type] - Filter by type of the resource to get comments from.
   * @param [param.id] - Filter by ID of the resource to get comments from.
   * @param [param.parent_id] - Filter by ID of the parent comment.
   * @param [params.after_id] - Filter by ID of the comment after which the comments will be returned.
   * @param [params.cursor.id] - The ID of the cursor.
   * @param [params.cursor.created_at] - The timestamp of the cursor.
   * @param [params.sort] - Sort order of the comments.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  list: comments_list,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/comments
   *
   * `async` Retrieves a comment by given parameters.
   *
   * @param comment_id - ID of the comment to retrieve.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  details: comments_details,
  /**
   * ##### Description
   * `PUT` `PATCH` `POST` `DELETE` https://osu.ppy.sh/api/v2/comments
   *
   * `async` Perform comment actions via endpoint.
   *
   * Check documentation for available parameters.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  actions: comments_actions,
};




import { users_list } from "../api/v2/users_list";
import { users_events } from "../api/v2/users_events";
import { users_details } from "../api/v2/users_details";
import { users_activity } from "../api/v2/users_activity";
import { users_beatmaps } from "../api/v2/users_beatmaps";
import { users_kudosu } from "../api/v2/users_kudosu";

/**
 * ##### Description
 * Covers API Endpoints regarding users.
 */
export const users = {
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/users
   *
   * `async` Retrieves a list of users by given parameters.
   *
   * @param ids - List of user ids to retrieve.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  list: users_list,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/users/{user}/kudosu
   *
   * `async` Retrieves the kudosu history of a given users.
   *
   * @params ids - List of user ids to retrieve.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  kudosu: users_kudosu,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/events
   *
   * `async` Retrieves a list of user events by given parameters.
   *
   * @param params - Parameters to include in the request.
   * @param [params.type] - Filter by type of event.
   * @param [params.sort] - Sort order of the events by id.
   * @param [params.cursor_string] - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  events: users_events,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/users/
   *
   * `async` Retrieves a user by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param params.id - ID or username of the user to retrieve.
   * @param [params.mode] - Retrieve data for a specific gamemode.
   * @param [params.key] - Type of the `params.id` parameter.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  details: users_details,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/users/{user}/beatmapsets/
   *
   * `async` Retrieves a list of user's beatmaps sets by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param params.type - Filter by type of beatmap set.
   * @param params.id - ID of the user to retrieve.
   * @param [params.limit] - Maximum number of beatmap sets to return.
   * @param [params.offset] - Result offset for pagination.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  beatmaps: users_beatmaps,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/users/{user}/activity
   *
   * `async` Retrieves a list of user's recent activities by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param params.id - ID of the user to retrieve.
   * @param [params.limit] - Maximum number of activities to return.
   * @param [params.offset] - Result offset for pagination.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  activity: users_activity,
};




import { scores_list } from "../api/v2/scores_list";
import { scores_details } from "../api/v2/scores_details";
import { scores_download } from "../api/v2/scores_download";

/**
 * ##### Description
 * Covers API Endpoints regarding scores.
 */
export const scores = {
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/beatmaps/
   *
   * `async` Retrieves a list of scores by given parameters.
   *
   * Check documentation for available parameters.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  list: scores_list,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/scores/
   *
   * `async` Retrieves a score by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param params.id - ID of the score to retrieve.
   * @param [params.mode] - Gamemode of the score.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  details: scores_details,
  /**
   * ##### Description
   * `GET` https://osu.ppy.sh/api/v2/scores/
   *
   * `async` Downloads a score by given parameters.
   *
   * @param {Object} params - Parameters to include in the request.
   * @param params.id - ID of the score to download.
   * @param [params.mode] - Gamemode of the score.
   * @param [params.file_path] - Where to save the file.
   * @param [addons] - Additional parameters to include in the request.
   *
   * @link [See documentation](https://github.com/cyperdark/osu-api-extended/wiki)
   */
  download: scores_download,
};



import { forums_topics_details } from '../api/v2/forums_topics_details';
import { forums_topics_actions } from '../api/v2/forums_topics_actions';

/**
 * ##### Description
 * Covers API Endpoints regarding forums.
 */
export const forums = {
  /**
   * ##### Description
   * Covers API Endpoints regarding forum topics.
   */
  topics: {
    /**
     * ### `GET` [/v2/forums/topics](https://osu.ppy.sh/docs/index.html#get-topic-and-posts)
     * `async` Retrieves a list of forum topics by given parameters.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.id` - ID of the topic to retrieve.
     * - `params.start_id?` - ID of the topic after which the topics will be returned.
     * - `params.end_id?` - ID of the topic before which the topics will be returned.
     * - `params.limit?` - Maximum number of topics to return.
     * - `params.sort?` - Sort order of the topics.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
     * - `addons?` - Additional parameters to include in the request. ([See IDefaultParams](../types/index.ts))
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * // TBA
     * ```
     *
     * &nbsp;
     *
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmap-packs) | [Check return types](../types/v2/forums_topics_details.ts)
     */
    details: forums_topics_details,
    /**
     * ### `POST` [/v2/forums/topics](https://osu.ppy.sh/docs/index.html#create-topic)
     * ### `POST` [/v2/forums/topics/{topic}/reply](https://osu.ppy.sh/docs/index.html#reply-topic)
     * ### `PUT/PATCH` [/v2/forums/posts/{post}](https://osu.ppy.sh/docs/index.html#edit-post)
     * ### `PUT/PATCH` [/v2/forums/topics/{topic}](https://osu.ppy.sh/docs/index.html#edit-topic)
     *
     * `async` Perform actions on forum topics via API.
     *
     * &nbsp;
     *
     * ### Global Parameters
     * - `params.type` - Type of action to perform.
     *
     * ### Parameters for `params.type:'create'`
     * - `params.forum_id` - ID of the forum to create the topic in.
     * - `params.title` - Title of the topic.
     * - `params.message` - Message of the topic.
     * - `params.enable_poll` - Whether to enable the poll.
     * - `params.poll.allow_vote_change?` - Whether to allow users to change their vote.
     * - `params.poll.hide_results?` - Whether to hide the results of the poll.
     * - `params.poll.title` - Title of the poll.
     * - `params.poll.options` - Options of the poll.
     * - `params.poll.max_votes_per_user?` - Maximum number of votes per user.
     * - `params.poll.duration_days?` - Duration of the poll.
     *
     * &nbsp;
     *
     * ### Parameters for `params.type:'reply'`
     * - `params.post_id` - ID of the post to reply to.
     * - `params.message` - Message of the reply.
     *
     * &nbsp;
     *
     * ### Parameters for `params.type:'edit_post'`
     * - `params.post_id` - ID of the post to edit.
     * - `params.message` - Message of the edit.
     *
     * &nbsp;
     *
     * ### Parameters for `params.type:'edit_topic'`
     * - `params.topic_id?` - ID of the topic to edit.
     * - `params.post_id?` - ID of the post to edit.
     * - `params.title?` - New title of the topic.
     * - `params.message` - New message of the topic.
     *
     * &nbsp;
     *
     * ### Usage Example
     * ```js
     * // TBA
     * ```
     *
     * &nbsp;
     *
     *
     * [See documentation](https://osu.ppy.sh/docs/index.html#forum) | [Check return types](../)
     */
    actions: forums_topics_actions,
  },
};



import { search_all } from '../api/v2/search';

export const search = search_all;



import { assets_backgrounds } from "../api/v2/assets_backgrounds";
import { assets_dataFiles } from "../api/v2/assets_dataFiles";


export const assets = {
  backgrounds: assets_backgrounds,
  dataFiles: assets_dataFiles
};



import { news_list } from "../api/v2/news_list";
import { news_details } from "../api/v2/news_details";


export const news = {
  list: news_list,
  details: news_details,
};




import { notifications_list } from '../api/v2/notifications_list';
import { notification_actions } from '../api/v2/notification_actions';


export const notifications = {
  list: notifications_list,
  actions: notification_actions,
};



import { ranking_list } from "../api/v2/ranking_list";


export const ranking = {
  list: ranking_list,
};



import { spotlights_list } from "../api/v2/spotlights_list";


export const spotlights = {
  list: spotlights_list,
};



import { wiki_details } from "../api/v2/wiki_details";


export const wiki = {
  details: wiki_details,
};



import { me_details } from "../api/v2/me_details";
import { me_friends } from "../api/v2/me_friends";
import { me_download_quota } from "../api/v2/me_download_quota";


export const me = {
  download_quota: me_download_quota,
  friends: me_friends,
  details: me_details,
};



import { matches_list } from "../api/v2/matches_list";
import { matches_details } from "../api/v2/matches_details";


export const matches = {
  list: matches_list,
  details: matches_details,
};



import { chat_channels_list } from "../api/v2/chat_channels_list";
import { chat_channels_actions } from "../api/v2/chat_channels_actions";

import { chat_list } from "../api/v2/chat_list";
import { chat_messages } from "../api/v2/chat_messages";
import { chat_updates } from "../api/v2/chat_updates";
import { chat_details } from "../api/v2/chat_details";
import { chat_actions } from "../api/v2/chat_actions";


export const chat = {
  channels: {
    list: chat_channels_list,
    actions: chat_channels_actions,
  },
  list: chat_list,
  messages: chat_messages,
  updates: chat_updates,
  details: chat_details,
  actions: chat_actions,
};



import { session_actions } from "../api/v2/session_actions";


export const session = {
  actions: session_actions,
};



import { rooms_list } from "../api/v2/rooms_list";
import { rooms_details } from "../api/v2/rooms_details";
import { rooms_leaderboard } from "../api/v2/rooms_leaderboard";
import { rooms_scores } from "../api/v2/rooms_scores";


export const rooms = {
  list: rooms_list,
  scores: rooms_scores,
  details: rooms_details,
  leaderboard: rooms_leaderboard,
};