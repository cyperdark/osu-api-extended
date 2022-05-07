import beatmap_set, { types as beatmap_set_type } from "./routes/beatmap/set";
import beatmap_diff, { types as beatmap_diff_type } from "./routes/beatmap/diff";
import beatmap_creator, { types as beatmap_creator_type } from "./routes/beatmap/creator";
import beatmap_scores, { types as beatmap_scores_type } from "./routes/beatmap/scores";

export const beatmap: {
  set: beatmap_set_type,
  diff: beatmap_diff_type,
  creator: beatmap_creator_type,
  scores: beatmap_scores_type
} = {
  set: beatmap_set,
  diff: beatmap_diff,
  creator: beatmap_creator,
  scores: beatmap_scores
};


import user_details, { types as user_details_type } from "./routes/user/details";
import user_scores_category, { types as user_scores_category_type } from "./routes/user/scores-category";


export const user: {
  details: user_details_type,
  scores: {
    category: user_scores_category_type,
  }
} = {
  details: user_details,
  scores: {
    category: user_scores_category,
  }
};


import match_details, { types as match_details_type } from "./routes/match";


export const match: match_details_type = match_details;


import replay_download, { types as replay_download_type } from "./routes/replay";


export const replay: replay_download_type = replay_download;