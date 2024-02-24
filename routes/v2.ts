import beatmap_events_list from "../api/v2/beatmap_events_list";
import beatmaps_lookup from "../api/v2/beatmaps_lookup";
import beatmaps_details from "../api/v2/beatmaps_details";
import beatmaps_download from "../api/v2/beatmaps_download";
import beatmap_packs_list from "../api/v2/beatmap_packs_list";
import beatmap_packs_details from "../api/v2/beatmap_packs_details";
import beatmaps_discussions_list from "../api/v2/beatmaps_discussions_list";
import beatmaps_discussions_posts from "../api/v2/beatmaps_discussions_posts";
import beatmaps_discussions_votes from "../api/v2/beatmaps_discussions_votes";


export const beatmaps = {
  packs: {
    list: beatmap_packs_list,
    details: beatmap_packs_details,
  },
  lookup: beatmaps_lookup,
  details: beatmaps_details,
  events: {
    list: beatmap_events_list,
  },
  download: beatmaps_download,
  discussions: {
    list: beatmaps_discussions_list,
    posts: beatmaps_discussions_posts,
    votes: beatmaps_discussions_votes,
  }
};




import changelogs_list from '../api/v2/changelogs_list';
import changelogs_details from '../api/v2/changelogs_details';


export const changelogs = {
  list: changelogs_list,
  details: changelogs_details,
};




import comments_list from '../api/v2/comments_list';


export const comments = {
  list: comments_list,
};




import users_details from "../api/v2/users_list";
import users_events from "../api/v2/users/events";


export const users = {
  list: users_details,
  events: users_events,
};



import user_details from "../api/v2/user/details";
import user_activity from "../api/v2/user/activity";


export const user = {
  details: user_details,
  activity: user_activity
};



import scores_details from "../api/v2/scores/details";
import scores_beatmap from "../api/v2/scores/beatmaps";
import scores_user_list from "../api/v2/scores/user/list";
import scores_user_beatmap from "../api/v2/scores/user/beatmap";

export const scores = {
  details: scores_details,
  user: {
    /**
     * @deprecated since 3.0.0. Use ***v2.scores.user.list*** instead
     */
    category: scores_user_list,
    list: scores_user_list,
    beatmap: scores_user_beatmap,
  },
  beatmap: scores_beatmap,
};



import site_ranking_details from "../api/v2/site/ranking/details";

export const site = {
  ranking: {
    details: site_ranking_details,
  },
};



import forums_topic_details from '../api/v2/forums/topic/details';

export const forums = {
  topic: {
    details: forums_topic_details
  }
};



import search_all from '../api/v2/search';

export const search = search_all;