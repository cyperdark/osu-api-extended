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

  count_100?: any;
  count_300?: any;
  count_50?: any;
  count_geki?: any;
  count_katu?: any;
  count_miss?: any;
};

type Response = TotalObjectsResponse & IError;



export const calculate_total_objects = (hits: Hits, mode: GamemodeEnum | string | number): Response => {
  if (Object.keys(hits).length == 0) {
    return handleErrors('Provide hits (300, 100, 50, etc)') as Response;
  };


  const geki = parseInt(hits?.geki || hits.count_geki || hits.perfect || '0');
  const h300 = parseInt(hits?.[300] || hits.count_300 || hits.great || '0');
  const katu = parseInt(hits?.katu || hits.count_katu || hits.good || '0');
  const h100 = parseInt(hits?.[100] || hits.count_100 || hits.ok || '0');
  const h50 = parseInt(hits?.[50] || hits.count_50 || hits.meh || '0');
  const h0 = parseInt(hits?.[0] || hits.count_miss || hits.miss || '0');


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
      return handleErrors(`Unsupported gamemode: ${mode}}`) as Response;
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


export const convert_hits = (hits: Hits, mode: GamemodeEnum | string | number): ResponseConvert => {
  if (Object.keys(hits).length == 0) {
    return handleErrors('Provide hits (300, 100, 50, etc)') as ResponseConvert;
  };


  const geki = parseInt(hits?.geki || hits.count_geki || hits.perfect || '0');
  const h300 = parseInt(hits?.[300] || hits.count_300 || hits.great || '0');
  const katu = parseInt(hits?.katu || hits.count_katu || hits.good || '0');
  const h100 = parseInt(hits?.[100] || hits.count_100 || hits.ok || '0');
  const h50 = parseInt(hits?.[50] || hits.count_50 || hits.meh || '0');
  const h0 = parseInt(hits?.[0] || hits.count_miss || hits.miss || '0');

  let geki_fc = parseInt(hits?.geki || hits.count_geki || hits.perfect || '0');
  let h300_fc = parseInt(hits?.[300] || hits.count_300 || hits.great || '0');
  let katu_fc = parseInt(hits?.katu || hits.count_katu || hits.good || '0');
  let h100_fc = parseInt(hits?.[100] || hits.count_100 || hits.ok || '0');
  let h50_fc = parseInt(hits?.[50] || hits.count_50 || hits.meh || '0');
  let h0_fc = parseInt(hits?.[0] || hits.count_miss || hits.miss || '0');


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
      return handleErrors(`Unsupported gamemode: ${mode}}`) as ResponseConvert;
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