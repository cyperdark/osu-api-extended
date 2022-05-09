import beatmap_set, { types as beatmap_set_type, description as beatmap_set_desc } from "./routes/beatmap/set";
import beatmap_diff, { types as beatmap_diff_type, description as beatmap_diff_desc } from "./routes/beatmap/diff";
import beatmap_creator, { types as beatmap_creator_type, description as beatmap_creator_desc } from "./routes/beatmap/creator";
import beatmap_scores, { types as beatmap_scores_type, description as beatmap_scores_desc } from "./routes/beatmap/scores";

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


import user_details, { types as user_details_type, description as user_details_desc } from "./routes/user/details";
import user_scores_category, { types as user_scores_category_type, description as user_scores_category_desc } from "./routes/user/scores-category";

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


import match_details, { types as match_details_type, description as match_details_desc } from "./routes/match";

export const match: match_details_type = match_details;


import replay_download, { types as replay_download_type, description as replay_download_desc } from "./routes/replay";

export const replay: replay_download_type = replay_download;


export const desc: {
  beatmap_set: object,
  beatmap_diff: object,
  beatmap_creator: object,
  beatmap_scores: object,
  user_details: object,
  user_scores_category: object,
  match: object,
  replay: object,
} = {
  beatmap_set: beatmap_set_desc,
  beatmap_diff: beatmap_diff_desc,
  beatmap_creator: beatmap_creator_desc,
  beatmap_scores: beatmap_scores_desc,
  user_details: user_details_desc,
  user_scores_category: user_scores_category_desc,
  match: match_details_desc,
  replay: replay_download_desc,
};