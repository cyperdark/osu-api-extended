import users_details from "./users/details";


export const users = {
  details: users_details,
};



import user_details from "./user/details";


export const user = {
  details: user_details,
};



import scores_details from "./scores/details";
import scores_user_list from "./scores/user/list";

export const scores = {
  details: scores_details,
  user: {
    /**
     * @deprecated since 3.0.0. Use ***v2.scores.user.list*** instead
     */
    category: scores_user_list,
    list: scores_user_list,
  }
};



import site_ranking_details from "./site/ranking/details";

export const site = {
  ranking: {
    details: site_ranking_details,
  },
};