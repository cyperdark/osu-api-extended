import { IError } from "../types";
import { GamemodeEnum } from "../types/enums";
import { ConvertHitsResponse, TotalObjectsResponse } from "../types/tools";
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

type Response = TotalObjectsResponse & IError;


/**
 * Calculate total passed objects
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
 *     const result = tools.calculate_total_passed_objects(hits, 'osu');
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
export const calculate_total_passed_objects = (hits: Hits, mode: GamemodeEnum | string | number): Response => {
  if (Object.keys(hits).length == 0) {
    return handleErrors(new Error('Provide hits (300, 100, 50, etc)')) as Response;
  };


  const geki = parseInt(hits.perfect || hits.count_geki || hits?.geki || '0');
  const h300 = parseInt(hits.great || hits.count_300 || hits?.[300] || '0');
  const katu = parseInt(hits.good || hits.count_katu || hits?.katu || '0');
  const h100 = parseInt(hits.ok || hits.count_100 || hits?.[100] || '0');
  const h50 = parseInt(hits.meh || hits.count_50 || hits?.[50] || '0');
  const h0 = parseInt(hits.miss || hits.count_miss || hits?.[0] || '0');


  let total_objects = 0;

  switch (mode) {
    case 'osu':
    case GamemodeEnum.osu:
      total_objects = h300 + h100 + h50 + h0;
      break;

    case 'taiko':
    case GamemodeEnum.taiko:
      total_objects = h300 + h100 + h0;
      break;

    case 'fruits':
    case GamemodeEnum.fruits:
      total_objects = h300 + h100 + katu + h50 + h0;
      break;

    case 'mania':
    case GamemodeEnum.mania:
      total_objects = h300 + geki + h100 + katu + h50 + h0;
      break;

    default:
      return handleErrors(new Error(`Unsupported gamemode: ${mode}}`)) as Response;
  };


  return {
    amount: total_objects,
    mode: mode,
    hits: {
      geki: geki,
      300: h300,
      katu: katu,
      100: h100,
      50: h50,
      0: h0,
    }
  } as Response;
};



type ResponseConvert = ConvertHitsResponse & IError;


/**
 * Calculate a play as an FC with the given hits.
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
 *     const result = tools.calculate_hits(hits, 'osu');
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
export const calculate_hits = (hits: Hits, mode: GamemodeEnum | string | number): ResponseConvert => {
  if (Object.keys(hits).length == 0) {
    return handleErrors(new Error('Provide hits (300, 100, 50, etc)')) as ResponseConvert;
  };


  const geki = parseInt(hits.perfect || hits.count_geki || hits?.geki || '0');
  const h300 = parseInt(hits.great || hits.count_300 || hits?.[300] || '0');
  const katu = parseInt(hits.good || hits.count_katu || hits?.katu || '0');
  const h100 = parseInt(hits.ok || hits.count_100 || hits?.[100] || '0');
  const h50 = parseInt(hits.meh || hits.count_50 || hits?.[50] || '0');
  const h0 = parseInt(hits.miss || hits.count_miss || hits?.[0] || '0');

  let geki_fc = parseInt(hits.perfect || hits.count_geki || hits?.geki || '0');
  let h300_fc = parseInt(hits.great || hits.count_300 || hits?.[300] || '0');
  let katu_fc = parseInt(hits.good || hits.count_katu || hits?.katu || '0');
  let h100_fc = parseInt(hits.ok || hits.count_100 || hits?.[100] || '0');
  let h50_fc = parseInt(hits.meh || hits.count_50 || hits?.[50] || '0');
  let h0_fc = parseInt(hits.miss || hits.count_miss || hits?.[0] || '0');


  switch (mode) {
    case 'osu':
    case GamemodeEnum.osu:
      h300_fc = h300 + h0;
      h0_fc = 0;
      break;

    case 'taiko':
    case GamemodeEnum.taiko:
      h300_fc = h300 + h0;
      h0_fc = 0;
      break;

    case 'fruits':
    case GamemodeEnum.fruits:
      h300_fc = h300 + h0;
      h0_fc = 0;
      break;

    case 'mania':
    case GamemodeEnum.mania:
      h300_fc = h300 + h0;
      h0_fc = 0;
      break;

    default:
      return handleErrors(new Error(`Unsupported gamemode: ${mode}}`)) as ResponseConvert;
  };


  return {
    hits: {
      geki: geki,
      300: h300,
      katu: katu,
      100: h100,
      50: h50,
      0: h0,
    },
    fc: {
      geki: geki_fc,
      300: h300_fc,
      katu: katu_fc,
      100: h100_fc,
      50: h50_fc,
      0: h0_fc,
    }
  } as ResponseConvert;
};