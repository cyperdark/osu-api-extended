import { IError } from "../types";
import { GamemodeEnum } from "../types/enums";
import { AccuracyResponse } from "../types/tools";
import { handleErrors } from "../utility/handleErrors";


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

  count_geki?: any;
  count_300?: any;
  count_katu?: any;
  count_100?: any;
  count_50?: any;
  count_miss?: any;
};

type Response = AccuracyResponse & IError;


/**
 * Calculate accuracy from play hits
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
 *     const result = tools.calculate_accuracy(hits, 'osu');
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
export const calculate_accuracy = (hits: Hits, mode: GamemodeEnum | string | number): Response => {
  if (Object.keys(hits).length == 0) {
    return handleErrors(new Error('Provide hits (300, 100, 50, etc)')) as Response;
  };


  const geki = parseInt(hits.perfect || hits.count_geki || hits?.geki || '0');
  const h300 = parseInt(hits.great || hits.count_300 || hits?.[300] || '0');
  const katu = parseInt(hits.good || hits.count_katu || hits?.katu || '0');
  const h100 = parseInt(hits.ok || hits.count_100 || hits?.[100] || '0');
  const h50 = parseInt(hits.meh || hits.count_50 || hits?.[50] || '0');
  const h0 = parseInt(hits.miss || hits.count_miss || hits?.[0] || '0');

  let accuracy = 0.0;
  let fc_accuracy = 0.0;


  switch (mode) {
    case 'osu':
    case GamemodeEnum.osu:
      accuracy = (100.0 * (6 * h300 + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + h0));

      fc_accuracy = (100.0 * (6 * (h300 + h0) + 2 * h100 + h50)) / (6 * (h50 + h100 + (h300 + h0) + 0));
      break;

    case 'taiko':
    case GamemodeEnum.taiko:
      accuracy = (100.0 * (2 * h300 + h100)) / (2 * (h300 + h100 + h0));

      fc_accuracy = (100.0 * (2 * (h300 + h0) + h100)) / (2 * ((h300 + h0) + h100 + 0));
      break;

    case 'fruits':
    case GamemodeEnum.fruits:
      accuracy = (100.0 * (h300 + h100 + h50)) / (h300 + h100 + h50 + katu + h0);

      fc_accuracy = (100.0 * ((h300 + h0) + h100 + h50)) / ((h300 + h0) + h100 + h50 + katu + 0);
      break;

    case 'mania':
    case GamemodeEnum.mania:
      accuracy = (100.0 * (6 * geki + 6 * h300 + 4 * katu + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + h0 + geki + katu));

      // IT'S NOT CORRECT PLEASE SOMEONE FIX IT
      fc_accuracy = (100.0 * (6 * (geki + h0) + 6 * h300 + 4 * katu + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + 0 + (geki + h0) + katu));
      break;

    default:
      return handleErrors(new Error(`Unsupported gamemode: ${mode}}`)) as Response;
  };


  return {
    accuracy,
    fc_accuracy,
  } as Response;
};