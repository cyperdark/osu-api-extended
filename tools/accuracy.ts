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

  large_tick_hit?: any;
  small_tick_hit?: any;
  small_tick_miss?: any; // osu lazer sliderTickHits
  slider_tail_hit?: any; // osu lazer sliderEndHits
};

type MaxHits = {
  large_tick_hit?: any;
  slider_tail_hit?: any; // osu lazer sliderEndHits
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
 *    const hits = {
 *      ok: 23,
 *      miss: 9,
 *      great: 457,
 *    };
 *    const stable = tools.calculate_accuracy(hits, 'osu');
 * 
 * 
 *    // or
 *    const lazer_hits = {
 *      ok: 23,
 *      miss: 9,
 *      great: 457,
 *      large_tick_hit: 15,
 *      slider_tail_hit: 244
 *    };
 *    const lazer_max_hits = {
 *      large_tick_hit: 15,
 *      slider_tail_hit: 245
 *    };
 *    const lazer = tools.calculate_accuracy(lazer_hits, lazer_max_hits, 'osu', true);
 * 
 * 
 *     console.log(stable, lazer);
 *   } catch (error) {
 *     console.log(error);
 *   };
 * };
 * 
 * main();
 * ```
 */
export function calculate_accuracy(hits: Hits, max_hits: MaxHits, mode: GamemodeEnum | string | number, lazer: boolean): Response;
export function calculate_accuracy(hits: Hits, mode: GamemodeEnum | string | number): Response;
export function calculate_accuracy(hits: Hits, p2: MaxHits | GamemodeEnum | string | number, p3?: GamemodeEnum | string | number | boolean, p4?: boolean): Response {
  let mode: GamemodeEnum | string | number;
  let max_hits: Hits | undefined;
  let lazer = false;


  if (hits && p2 != null && p3 != null) {
    max_hits = p2 as Hits;
    mode = p3 as GamemodeEnum | string | number;
    lazer = p4;
  }
  else if (hits && p2 != null) {
    max_hits = undefined;
    mode = p2 as GamemodeEnum | string | number;
  };


  if (Object.keys(hits).length == 0) {
    return handleErrors(new Error('Provide hits (300, 100, 50, etc)')) as Response;
  };


  const geki = parseInt(hits.perfect || hits.count_geki || hits?.geki || '0');
  const h300 = parseInt(hits.great || hits.count_300 || hits?.[300] || '0');
  let katu = parseInt(hits.good || hits.count_katu || hits?.katu || '0');
  let h100 = parseInt(hits.ok || hits.count_100 || hits?.[100] || '0');
  let h50 = parseInt(hits.meh || hits.count_50 || hits?.[50] || '0');
  const h0 = parseInt(hits.miss || hits.count_miss || hits?.[0] || '0');
  const slider_tick_hits = parseInt(hits?.large_tick_hit || '0');
  const slider_end_hits = parseInt(hits?.slider_tail_hit || '0');

  const max_slider_tick_hits = parseInt(max_hits?.large_tick_hit || '0');
  const max_slider_end_hits = parseInt(max_hits?.slider_tail_hit || '0');


  let accuracy = 0.0;
  let fc_accuracy = 0.0;


  switch (mode) {
    case 'osu':
    case GamemodeEnum.osu:
      if (lazer) {
        accuracy = (300 * h300 + 100 * h100 + 50 * h50 + 150 * slider_end_hits + 30 * slider_tick_hits) / (300 * h300 + 300 * h100 + 300 * h50 + 300 * h0 + 150 * max_slider_end_hits + 30 * max_slider_tick_hits);

        fc_accuracy =
          (300 * (h300 + h0) + 100 * h100 + 50 * h50 + 150 * slider_end_hits + 30 * slider_tick_hits) /
          (300 * (h300 + h0) + 100 * h100 + 50 * h50 + 300 * 0 + 150 * max_slider_end_hits + 30 * max_slider_tick_hits)
      }
      else {
        accuracy = (6 * h300 + 2 * h100 + h50) / (6 * (h300 + h100 + h50 + h0));

        fc_accuracy = (6 * (h300 + h0) + 2 * h100 + h50) / (6 * (h50 + h100 + (h300 + h0) + 0));
      };
      break;

    case 'taiko':
    case GamemodeEnum.taiko:
      accuracy = (2 * h300 + h100) / (2 * (h300 + h100 + h0));

      fc_accuracy = (2 * (h300 + h0) + h100) / (2 * ((h300 + h0) + h100 + 0));
      break;

    case 'fruits':
    case GamemodeEnum.fruits:
      if (hits.small_tick_miss) katu = parseInt(hits.small_tick_miss);
      if (hits.large_tick_hit) h100 = parseInt(hits.large_tick_hit);
      if (hits.small_tick_hit) h50 = parseInt(hits.small_tick_hit);

      accuracy = (h300 + h100 + h50) / ((h300 + h100 + h50) + katu + h0);

      fc_accuracy = ((h300 + h0) + h100 + h50) / (((h300 + h0) + h100 + h50) + katu + 0);
      break;

    case 'mania':
    case GamemodeEnum.mania:
      accuracy = (6 * (geki + h300) + 4 * katu + 2 * h100 + h50) / (6 * (geki + h300 + katu + h100 + h50 + h0))

      // IT'S NOT CORRECT PLEASE SOMEONE FIX IT
      fc_accuracy = (6 * (geki + h0) + 6 * h300 + 4 * katu + 2 * h100 + h50) / (6 * (h50 + h100 + h300 + 0 + (geki + h0) + katu));
      break;

    default:
      return handleErrors(new Error(`Unsupported gamemode: ${mode}`)) as Response;
  };


  return {
    accuracy: accuracy * 100,
    fc_accuracy: fc_accuracy * 100,
  } as Response;
};