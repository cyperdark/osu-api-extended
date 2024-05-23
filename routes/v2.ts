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
   * &nbsp;
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
     * ### `GET` [v2/beatmapsets/{beatmapset}/events](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetsevents)
     * `async` Retrieves a list of beatmap set events.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `obj.user` - Filter by author of the event.
     * - `obj.types` - Filter by type of the event.
     * - `obj.min_date` - Filter by minimum date of the event.
     * - `obj.max_date` - Filter by maximum date of the event.
     * - `addons?` - Additional parameters to include in the request.
     *
     * &nbsp;
     *
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetsevents) | [Check return types](../types/v2/beatmaps_events_list.ts)
     */
    list: beatmaps_events_list,
  },
  /**
   * `async` Downloads a beatmap or beatmap set by given ID. (Supports different hosts)
   *
   * &nbsp;
   *
   * ### Available hosts
   * - `type:'difficulty'`: osu, osu_direct_mirror, catboy
   * - `type:'set'`: osu, beatconnect, nerinyan, osu_direct_mirror, sayobot, gatari, ripple, catboy
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of the beatmap.
   * - `params.id` - ID of the beatmap or beatmap set.
   * - `params.host` - Host of the download source.
   * - `params.file_path` - Path to the save location.
   * - `params.overwrite` - Whether to overwrite the file if it already exists.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'set'`
   * - `params.no_video?` - Whether to include video in the download.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2beatmapsetsbeatmapsetdownload) | [Check return types](../types/v2/beatmaps_download.ts)
   */
  download: beatmaps_download,
  /**
   * ##### Description
   * Covers API Endpoints regarding beatmap discussions.
   */
  discussions: {
    /**
     * ### `GET` [/v2/beatmapsets/discussions`](https://osu.ppy.sh/docs/index.html#get-beatmapset-discussions)
     * `async` Retrieves a list of beatmap set discussions.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.only_unresolved?` - Filter by unresolved discussions.
     * - `params.user?` - Filter by author of the discussion.
     * - `params.beatmap_id?` - Filter by beatmap ID.
     * - `params.beatmapset_id?` - Filter by beatmap set ID.
     * - `params.beatmapset_status?` - Filter by beatmap set status.
     * - `params.message_type?` - Filter by message type.
     * - `params.limit?` - Maximum number of discussions to return.
     * - `params.sort?` - Sort order of the discussions.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
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
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmapset-discussions) | [Check return types](../types/v2/beatmaps_discussions_list.ts)
     */
    list: beatmaps_discussions_list,
    /**
     * ### `GET` [/v2/beatmapsets/discussions/posts](https://osu.ppy.sh/docs/index.html#beatmapset-discussions)
     * `async` Retrieves the posts of a beatmap set discussion.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.discussion_id?` - ID of the beatmap set discussion to retrieve.
     * - `params.sort?` - Sort order of the posts.
     * - `params.type?` - Filter by type of the post.
     * - `params.limit?` - Maximum number of posts to return.
     * - `params.user?` - Filter by author of the post.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
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
     * [See documentation](https://osu.ppy.sh/docs/index.html#beatmapset-discussions) | [Check return types](../types/v2/beatmaps_discussions_posts.ts)
     */
    posts: beatmaps_discussions_posts,
    /**
     * ### `GET` [/v2/beatmapsets/discussions/votes](https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-votes)
     * `async` Retrieves the votes given to beatmap set discussions.
     *
     * &nbsp;
     *
     * ### Parameters
     * - `params.discussion_id?` - ID of the beatmap set discussion to retrieve.
     * - `params.sort?` - Sort order of the votes.
     * - `params.score?` - Filter by score of the vote.
     * - `params.user?` - Filter by author of the vote.
     * - `params.receiver?` - Filter by receiver of the vote.
     * - `params.limit?` - Maximum number of votes to return.
     * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
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
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmapset-discussion-votes) | [Check return types](../types/v2/beatmaps_discussions_votes.ts)
     */
    votes: beatmaps_discussions_votes,
  },
  /**
   * Currently broken.
   */
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
   * ### `GET` [/v2/changelogs](https://osu.ppy.sh/docs/index.html#get-changelog-listing)
   * ### `GET` [/v2/changelogs/{changelog}](https://osu.ppy.sh/docs/index.html#lookup-changelog-build)
   * `async` Retrieves a list of all available changelogs.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Fetch type.
   * - `params.message_formats` - Return format.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `type:'all'`
   * - `params.from_build?` - Minimum build version.
   * - `params.to_build?` - Maximum build version.
   * - `params.stream_name?` - Stream name to return builds from.
   * - `params.max_id?` - Maximum build ID.
   *
   * &nbsp;
   *
   * ### Parameters for `type:'lookup'`
   * - `params.changelog` - Build version, update stream name, or build ID.
   * - `params.key` - Unset to query by build version or stream name, or id to query by build ID.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-changelog-listing) | [Check return types](../types/v2/changelogs_list.ts)
   */
  list: changelogs_list,
  /**
   * ### `GET` [/v2/changelog/{stream}/{build}](https://osu.ppy.sh/docs/index.html#get-changelog-build)
   * `async` Retrieves details of the specified build.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.stream_name` - Update stream name.
   * - `params.build_version` - Build version.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-changelog-build) | [Check return types](../types/v2/changelogs_details.ts)
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
   * ### `GET` [/v2/comments](https://osu.ppy.sh/api/v2/comments)
   * `async` Retrieves a list of all comments by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type?` - Type of the resource to get comments from.
   * - `params.id?` - ID of the resource to get comments from.
   * - `params.parent_id?` - ID of the parent comment.
   * - `params.after_id?` - ID of the comment after which the comments will be returned.
   * - `params.cursor?.id`- The ID of the cursor.
   * - `params.cursor?.created_at` - The timestamp of the cursor.
   * - `params.sort?` - Sort order of the comments.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-comments-listing) | [Check return types](../types/v2/comments_list.ts)
   */
  list: comments_list,
  /**
   * ### `GET` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#get-a-comment)
   * `async` Retrieves a comment by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.comment_id` - ID of the comment to retrieve.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-a-comment) | [Check return types](../types/v2/comments_details.ts)
   */
  details: comments_details,
  /**
   * ### `POST` [/v2/comments](https://osu.ppy.sh/docs/index.html#post-a-new-comment)
   * ### `PUT` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#edit-comment)
   * ### `PATCH` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#edit-comment)
   * ### `DELETE` [/v2/comments/{comment}](https://osu.ppy.sh/docs/index.html#delete-comment)
   * ### `POST` [/v2/comments/{comment}/vote](https://osu.ppy.sh/docs/index.html#add-comment-vote)
   * ### `DELETE` [/v2/comments/{comment}/vote](https://osu.ppy.sh/docs/index.html#remove-comment-vote)
   * `async` Perform comment actions via endpoint.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.id?` - ID of the comment to perform the action on.
   * - `params.type` - Type of the action to perform.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'new'`
   * - `params.message?` - The message of the comment.
   * - `params.parent_id?` - The id of the comment to reply to.
   * - `params.commentable_type?` - Resource type the comment thread is attached to.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'edit'`
   * - `params.message?` - The message of the comment.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#post-a-new-comment) | [Check return types](../types/v2/comments_actions.ts)
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
   * ### `GET` [/v2/users](https://osu.ppy.sh/docs/index.html#get-users)
   * `async` Retrieves a list of users by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.ids` - List of user ids to retrieve.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-users) | [Check return types](../types/v2/users_list.ts)
   */
  list: users_list,
  /**
   * ### `GET` [/v2/users/{user}/kudosu](https://osu.ppy.sh/docs/index.html#get-user-kudosu)
   * `async` Retrieves the kudosu history of a given user.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the user to retrieve.
   * - `params.limit?` - Maximum number of results to return.
   * - `params.offset?` - Result offset for pagination.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-user-kudosu) | [Check return types](../types/v2/users_kudosu.ts)
   */
  kudosu: users_kudosu,
  /**
   * ### `GET` [/v2/events](https://osu.ppy.sh/docs/index.html#get-events)
   * `async` Retrieves a list of user events by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type?` - Filter by type of event.
   * - `params.sort?` - Sort order of the events by id.
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-events) | [Check return types](../types/v2/users_events.ts)
   */
  events: users_events,
  /**
   * ### `GET` [/v2/users/{user}/{mode?}](https://osu.ppy.sh/docs/index.html#get-user)
   * `async` Retrieves a user by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID or username of the user to retrieve.
   * - `params.mode?` - Retrieve data for a specific gamemode.
   * - `params.key?` - Type of the `params.id` parameter.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-user) | [Check return types](../types/v2/users_details.ts)
   */
  details: users_details,
  /**
   * ### `GET` [/v2/users/{user}/beatmapsets/{type}](https://osu.ppy.sh/docs/index.html#get-user-beatmaps)
   * `async` Retrieves a list of user's beatmaps sets by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.type` - Filter by type of beatmap set.
   * - `params.id` - ID of the user to retrieve.
   * - `params.limit?` - Maximum number of beatmap sets to return.
   * - `params.offset?` - Result offset for pagination.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-user-beatmaps) | [Check return types](../types/v2/users_beatmaps.ts)
   */
  beatmaps: users_beatmaps,
  /**
   * ### `GET` [/v2/users/{user}/recent_activity](https://osu.ppy.sh/docs/index.html#get-user-recent-activity)
   * `async` Retrieves a list of user's recent activities by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the user to retrieve.
   * - `params.limit?` - Maximum number of activities to return.
   * - `params.offset?` - Result offset for pagination.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-user-recent-activity) | [Check return types](../types/v2/users_activity.ts)
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
   * ### `GET` [/v2/beatmaps/{beatmap}/scores](https://osu.ppy.sh/docs/index.html#get-beatmap-scores)
   * ### `GET` [/v2/beatmaps/{beatmap}/scores/users/{user}](https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-score)
   * ### `GET` [/v2/beatmaps/{beatmap}/scores/users/{user}/all](https://osu.ppy.sh/docs/index.html#get-a-user-beatmap-scores)
   * ### `GET` [/v2/beatmaps/{beatmap}/solo-scores](https://osu.ppy.sh/docs/index.html#get-beatmap-scores-non-legacy)
   * `async` Retrieves a list of scores by given parameters.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.mode?` - Retrieve data for a specific gamemode.
   * - `params.type` - Type of scores to retrieve.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'leaderboard' | 'solo_scores'`
   * - `params.leaderboard_type?: Type of leaderboard to retrieve.`
   * - `params.beatmap_id` - ID of the beatmap to retrieve data from.
   * - `params.mods?` - Retrieve scores for specific mods.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'beatmap_best'`
   * - `params.beatmap_id` - ID of the beatmap.
   * - `params.user_id` - ID of the user.
   * - `params.mods?` - Retrieve scores for specific mods.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type: 'beatmap_all'`
   * - `params.beatmap_id` - ID of the beatmap.
   * - `params.user_id` - ID of the user.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'user_best' | 'user_firsts' | 'user_recent' | 'user_pinned'`
   * - `params.user_id` - ID of the user to retrieve data from.
   * - `params.include_fails?` - Include failed scores.
   * - `params.limit?` - Maximum number of scores to return.
   * - `params.offset?` - Result offset for pagination.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmap-scores) | [Check return types](../types/v2/scores_list.ts)
   *
   */
  list: scores_list,
  /**
   * ### `GET` [/v2/scores/{rulesetOrScore}/{score?}](https://osu.ppy.sh/docs/index.html#get-apiv2scoresrulesetorscorescore)
   * `async` Retrieves a score by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the score to retrieve.
   * - `params.mode?` - Gamemode of the score.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2scoresrulesetorscorescore) | [Check return types](../types/v2/scores_details.ts)
   *
   */
  details: scores_details,
  /**
   * ### `GET` [/v2/scores/{rulesetOrScore}/{score}/download](https://osu.ppy.sh/docs/index.html#get-apiv2scoresrulesetorscorescoredownload)
   * `async` Downloads a score by given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.id` - ID of the score to download.
   * - `params.mode?` - Gamemode of the score.
   * - `params.file_path?` - Where to save the file.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2scoresrulesetorscorescoredownload) | [Check return types](../types/v2/scores_download.ts)
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
     * [See documentation](https://osu.ppy.sh/docs/index.html#get-beatmap-packs) | [Check return types](../types/v2/forums_topics_details.ts)
     */
    details: forums_topics_details,
    /**
     * ### `POST` [/v2/forums/topics](https://osu.ppy.sh/docs/index.html#create-topic)
     * ### `POST` [/v2/forums/topics/{topic}/reply](https://osu.ppy.sh/docs/index.html#reply-topic)
     * ### `PUT/PATCH` [/v2/forums/posts/{post}](https://osu.ppy.sh/docs/index.html#edit-post)
     * ### `PUT/PATCH` [/v2/forums/topics/{topic}](https://osu.ppy.sh/docs/index.html#edit-topic)
     * `async` Perform actions on forum topics via API.
     *
     * &nbsp;
     *
     * ### Global Parameters
     * - `params.type` - Type of action to perform.
     * - `addons?` - Additional parameters to include in the request.
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

/**
 * ### `GET` [/v2/search](https://osu.ppy.sh/docs/index.html#search)
 * `async` Search for users and wiki pages.
 *
 * &nbsp;
 *
 * ### Global Parameters
 * - `params.type` - Type of search.
 * - `params.query?` - Query to search for.
 * - `addons?` - Additional parameters to include in the request.
 *
 * &nbsp;
 *
 * ### Parameters for `params.type:'site'`
 * - `params.location?` - Page to search on.
 * - `params.page?` - Page number of the search results.
 *
 * &nbsp;
 *
 * ### Parameters for `params.type:'beatmaps'`
 * - `params.mode?` - Gamemode to search for.
 * - `params._played?` - Unknown parameter description.
 * - `params._nsfw?` - Whether to include NSFW beatmaps.
 * - `params.status?` - Filter by status.
 * - `params.category?` - Filter by category.
 * - `params.genre?` - Filter by genre.
 * - `params.language?` - Filter by language.
 * - `params.achieved_rank?` - Filter by achieved rank.
 * - `params.extra?` - Filter by extra features.
 * - `params.sort?` - Sort the results.
 * - `params.cursor_string?` - Cursor string.
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
 * [See documentation](https://osu.ppy.sh/docs/index.html#search) | [Check return types](../types/v2/search.ts)
 *
 */
export const search = search_all;



import { assets_backgrounds } from "../api/v2/assets_backgrounds";
import { assets_dataFiles } from "../api/v2/assets_dataFiles";


/**
 * ##### Description
 * Retrieve data from the assets API.
 */
export const assets = {
  /**
   * ### `GET` [/v2/seasonal-backgrounds](https://osu.ppy.sh/docs/index.html#get-apiv2seasonal-backgrounds)
   * `async` Retrieves seasonal or beatmap backgrounds.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Source of the background.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'beatmapset'`
   * - `params.set_id` - ID of the beatmapset.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2seasonal-backgrounds) | [Check return types](../types/v2/assets_backgrounds.ts)
   */
  backgrounds: assets_backgrounds,
  /**
   * ### `GET` `https://data.ppy.sh/`
   * `async` Retrieves all urls from the data API.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2seasonal-backgrounds) | [Check return types](../types/v2/assets_backgrounds.ts)
   */
  dataFiles: assets_dataFiles
};



import { news_list } from "../api/v2/news_list";
import { news_details } from "../api/v2/news_details";


/**
 * ##### Description
 * Retrieve data from the news API.
 */
export const news = {
  /**
   * ### `GET` [/v2/news](https://osu.ppy.sh/docs/index.html#get-news-listing)
   * `async` Get a list of all the news based on certain criteria.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.from_year?` - Year to return posts from.
   * - `params.limit?` - Maximum number of posts to return.
   * - `params.cursor_string?` - [Cursor string for pagination.](https://osu.ppy.sh/docs/index.html#cursorstring)
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-news-listing) | [Check return types](../types/v2/news_list.ts)
   */
  list: news_list,
  /**
   * ### `GET` [/v2/news/{news}](https://osu.ppy.sh/docs/index.html#get-news-post)
   * `async` Retrieves a single news post based on given parameters.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.query` - ID or slug of the news post.
   * - `params.key` - Type of the query.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```
   * // TBA
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-news-post) | [Check return types](../types/v2/news_details.ts)
   */
  details: news_details,
};




import { notifications_list } from '../api/v2/notifications_list';
import { notification_actions } from '../api/v2/notification_actions';


/**
 * ##### Description
 * Retrieve data from the notifications API.
 */
export const notifications = {
  /**
   * ### `GET` [/v2/notifications](https://osu.ppy.sh/docs/index.html#get-notifications)
   * `async` Retrieves a list of the user's unread notifications.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.max_id` - Maximum id fetched.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Usage Example
   * ```
   * // TBA
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-notifications) | [Check return types](../types/v2/notifications_list.ts)
   */
  list: notifications_list,
  /**
   * ### `POST` [/v2/notifications/mark-read](https://osu.ppy.sh/docs/index.html#mark-notifications-as-read)
   * `async` Perform certain actions via the notifications API.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of the action.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'mark_as_read'`
   * - `params.identities[].category?` - Category of the identity.
   * - `params.identities[].object_id?` Id of the object that triggered the notification.
   * - `params.identities[].object_type?` Type of the object that triggered the notification.
   * - `params.notifications[].category?` - Category of the notification.
   * - `params.notifications[].object_id?` Id of the object that triggered the notification.
   * - `params.notifications[].object_type?` Type of the object that triggered the notification.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#mark-notifications-as-read) | [Check return types](../types/v2/notification_actions.ts)
   */
  actions: notification_actions,
};



import { ranking_list } from "../api/v2/ranking_list";


/**
 * ##### Description
 * Retrieve data from the ranking API.
 */
export const ranking = {
  /**
   * ### `GET` [/v2/rankings/{mode}/{type}](https://osu.ppy.sh/docs/index.html#get-ranking)
   * ### `GET` [/v2/rankings/kudosu](https://osu.ppy.sh/docs/index.html#get-kudosu-ranking)
   * `async` Retrieves a ranking list based on given parameters.
   *
   * &nbsp;
   *
   * ### Global Parameters
   * - `params.type` - Type of ranking search.
   * - `params.page?` - Page number of the search results.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'charts'`
   * - `params.spotlight_id?` - ID of the spotlight.
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'country'`
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   *
   * &nbsp;
   *
   * #### Parameters for `params.type:'performance'`
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
   * - `params.country_code?` - Country code to search for.
   * - `params.variant?` - Filter by mania variant.
   *
   * &nbsp;
   *
   * ### Parameters for `params.type:'score'`
   * - `params.mode?` - Gamemode to search for.
   * - `params.filter?` - Filter by type.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-ranking) | [Check return types](../types/v2/ranking_list.ts)
   */
  list: ranking_list,
};



import { spotlights_list } from "../api/v2/spotlights_list";


/**
 * ##### Description
 * Retrieve data from the spotlights API.
 */
export const spotlights = {
  /**
   * ### `GET` [/v2/spotlights](https://osu.ppy.sh/docs/index.html#get-spotlights)
   * `async` Retrieve a list of spotlights.
   *
   * &nbsp;
   *
   * ### Parameters
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-spotlights) | [Check return types](../types/v2/spotlights_list.ts)
   */
  list: spotlights_list,
};



import { wiki_details } from "../api/v2/wiki_details";


/**
 * ##### Description
 * Retrieve data from the wiki API.
 */
export const wiki = {
  /**
   * ### `GET` [/v2/wiki/{locale}/{path}](https://osu.ppy.sh/docs/index.html#get-wiki-page)
   * `async` Retrieve a wiki page or image data.
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.locale` - Two-letter language code of the wiki page.
   * - `params.path_name` - Path of the wiki page.
   * - `addons?` - Additional parameters to include in the request.
   *
   * &nbsp;
   *
   * #### Usage Example
   * ```js
   * // TBA
   * ```
   *
   * &nbsp;
   *
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-wiki-page) | [Check return types](../types/v2/wiki_details.ts)
   */
  details: wiki_details,
};



import { me_details } from "../api/v2/me_details";
import { me_friends } from "../api/v2/me_friends";
import { me_download_quota } from "../api/v2/me_download_quota";


/**
 * ##### Description
 * Retrieve data from the me API.
 */
export const me = {
  /**
   * ### `GET` [/v2/me/download-quota-check](https://osu.ppy.sh/docs/index.html#get-apiv2medownload-quota-check)
   * `async` Get your download quota. (requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2medownload-quota-check) | [Check return types](../types/v2/me_download_quota.ts)
   */
  download_quota: me_download_quota,
  /**
   * ### `GET` [/v2/friends](https://osu.ppy.sh/docs/index.html#get-apiv2friends)
   * `async` Get a list of your friends. (requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-apiv2friends) | [Check return types](../types/v2/me_friends.ts)
   */
  friends: me_friends,
  /**
   * ### `GET` [/v2/me/{mode?}](https://osu.ppy.sh/docs/index.html#get-own-data)
   * `async` Get your own data. (requires lazer authentication)
   *
   * &nbsp;
   *
   * ### Parameters
   * - `params.mode?` - Gamemode to search for.
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
   * [See documentation](https://osu.ppy.sh/docs/index.html#get-own-data) | [Check return types](../types/v2/me_details.ts)
   */
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