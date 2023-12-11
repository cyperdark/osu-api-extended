import users_details from "./users/details";
import users_events from "./users/events";


export const users = {
  details: users_details,
  events: users_events,
};



import user_details from "./user/details";


export const user = {
  details: user_details,
};



import scores_details from "./scores/details";
import scores_beatmap from "./scores/beatmaps";
import scores_user_list from "./scores/user/list";
import scores_user_beatmap from "./scores/user/beatmap";

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



import site_ranking_details from "./site/ranking/details";

export const site = {
  ranking: {
    details: site_ranking_details,
  },
};



import forums_topic_details from './forums/topic/details';

export const forums = {
  topic: {
    details: forums_topic_details
  }
};



import search_all from './search/index';

export const search = search_all;