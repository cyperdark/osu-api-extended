import _rank from "./routes/rank";
import _country from "./routes/country";
import _accuracy from "./routes/accuracy";
import _download_difficulty from "./routes/download/difficulty";

export const rank = _rank;

export const country = _country

export const accuracy = _accuracy

export const download = {
  difficulty: _download_difficulty
};