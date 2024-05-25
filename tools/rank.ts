import { IError } from "../types";
import { GamemodeEnum } from "../types/enums";
import { RankResponse } from "../types/tools";
import { handleErrors } from "../utility/handleErrors";
import { calculate_accuracy } from "./accuracy";
import { calculate_mods } from "./mods";


type Hits = {
  300?: any;
  100?: any;
  50?: any;
  0?: any;
  geki?: any;
  katu?: any;

  perfect?: any;
  great?: any;
  good?: any;
  ok?: any;
  meh?: any;
  miss?: any;
};

type Response = RankResponse & IError;



export const calculate_rank = (hits: Hits, mods: string | number = 0, mode: GamemodeEnum | string | number): Response => {
  if (Object.keys(hits).length == 0) {
    return handleErrors('Provide hits (300, 100, 50, etc)') as Response;
  };


  const { name: modsName } = calculate_mods(mods);;
  const { accuracy } = calculate_accuracy(hits, mode);

  const geki = parseInt(hits?.geki || hits.perfect || '0');
  const h300 = parseInt(hits?.[300] || hits.great || '0');
  const katu = parseInt(hits?.katu || hits.good || '0');
  const h100 = parseInt(hits?.[100] || hits.ok || '0');
  const h50 = parseInt(hits?.[50] || hits.meh || '0');
  const h0 = parseInt(hits?.[0] || hits.miss || '0');

  const is_silver = /hd|fl/i.test(modsName);


  let total = 0;

  let r300 = 0;
  let r50 = 0;

  let rank = '';


  switch (mode) {
    case 'osu':
    case GamemodeEnum.osu:
      total = +h300 + +h100 + +h50 + +h0;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (r300 === 1) rank = is_silver ? 'XH' : 'X';
      else if (r300 > 0.9 && r50 < 0.01 && h0 === 0) rank = is_silver ? 'SH' : 'S';
      else if ((r300 > 0.8 && h0 === 0) || r300 > 0.9) rank = 'A';
      else if ((r300 > 0.7 && h0 === 0) || r300 > 0.8) rank = 'B';
      else if (r300 > 0.6) rank = 'C';
      else rank = 'D';

      break;

    case 'taiko':
    case GamemodeEnum.taiko:
      total = +h300 + +h100 + +h50 + +h0;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (r300 === 1) rank = is_silver ? 'XH' : 'X';
      else if (r300 > 0.9 && r50 < 0.01 && h0 === 0) rank = is_silver ? 'SH' : 'S';
      else if ((r300 > 0.8 && h0 === 0) || r300 > 0.9) rank = 'A';
      else if ((r300 > 0.7 && h0 === 0) || r300 > 0.8) rank = 'B';
      else if (r300 > 0.6) rank = 'C';
      else rank = 'D';

      break;

    case 'fruits':
    case GamemodeEnum.fruits:
      total = +h300 + +h100 + +h50 + +h0 + +katu;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (accuracy === 1) rank = is_silver ? 'XH' : 'X';
      else if (accuracy > 0.98) rank = is_silver ? 'SH' : 'S';
      else if (accuracy > 0.94) rank = 'A';
      else if (accuracy > 0.9) rank = 'B';
      else if (accuracy > 0.85) rank = 'C';
      else rank = 'D';

      break;

    case 'mania':
    case GamemodeEnum.mania:
      total = +h300 + +h100 + +h50 + +h0 + +geki + +katu;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (accuracy === 1) rank = is_silver ? 'XH' : 'X';
      else if (accuracy > 0.95) rank = is_silver ? 'SH' : 'S';
      else if (accuracy > 0.9) rank = 'A';
      else if (accuracy > 0.8) rank = 'B';
      else if (accuracy > 0.7) rank = 'C';
      else rank = 'D';

      break;
  };


  return {
    rank,
  } as Response;
};