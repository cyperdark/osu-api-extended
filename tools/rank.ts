import { IError } from "../types";
import { GamemodeEnum } from "../types/enums";
import { Mod } from "../types/mods";
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


/**
 * Calculate rank from play hits
 *
 * &nbsp;
 *
 * ### Parameters
 * - `hits.geki` or `hits.perfect` or `hits.count_geki` - Amount of geki's
 * - `hits[300]` or `hits.great` or `hits.count_300` - Amount of 300's
 * - `hits.katu` or `hits.good` or `hits.count_katu` - Amount of katu's
 * - `hits[100]` or `hits.ok` or `hits.count_100` - Amount of 100's
 * - `hits[50]` or `hits.meh` or `hits.count_50` - Amount of 50's
 * - `hits[0]` or `hits.miss` or `hits.count_miss` - Amount of misses
 * 
 * - `mods` - Number / Name / Array of { acronym: "EZ" }
 * - `mode` - Number/Name of the gamemode
 *
 * &nbsp;
 *
 * ### Usage Example
 * ```js
 * const { tools } = require('osu-api-extended');
 * 
 * function main() {
 *   try {
 *     const hits = { 300: 123, 100: 12, 50: 1, 0: 1 };
 *     const result = tools.calculate_rank(hits, 72, 'osu');
 *     if (result.error != null) {
 *       console.log(result.error);
 *       return;
 *     };
 * 
 * 
 *     console.log(result);
 *   } catch (error) {
 *     console.log(error);
 *   };
 * };
 * 
 * main();
 * ```
 */
export const calculate_rank = (hits: Hits, mods: Mod[] | string | number = 0, mode: GamemodeEnum | string | number): Response => {
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
    accuracy,
  } as Response;
};