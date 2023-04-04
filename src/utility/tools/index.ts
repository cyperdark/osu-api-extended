import _rank, { description as _rank_desc } from "./routes/rank";
import _country, { description as _country_desc } from "./routes/country";
import _accuracy, { description as _accuracy_desc } from "./routes/accuracy";
import _total_objects, { description as _total_objects_desc } from "./routes/total_objects";
import _download_difficulty, { description as _download_difficulty_desc } from "./routes/download/difficulty";
import _pp_calculate, { description as _pp_calculate_desc } from "./routes/pp/calculate";


export const rank = _rank;
export const country = _country
export const accuracy = _accuracy
export const total_objects = _total_objects;
export const download = {
  difficulty: _download_difficulty
};
export const pp = {
  calculate: _pp_calculate
};


export const desc: {
  rank: object,
  country: object,
  accuracy: object,
  total_objects: object,
  download: {
    difficulty: object,
  },
  pp: {
    calculate: object,
  },
} = {
  rank: _rank_desc,
  country: _country_desc,
  accuracy: _accuracy_desc,
  total_objects: _total_objects_desc,
  download: {
    difficulty: _download_difficulty_desc,
  },
  pp: {
    calculate: _pp_calculate_desc,
  },
}