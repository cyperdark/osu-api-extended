import { IError } from "../types";
import { GamemodeEnum } from "../types/enums";
import { TotalObjectsResponse } from "../types/tools";
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
};

type Response = TotalObjectsResponse & IError;



export const calculate_total_objects = (hits: Hits, mode: GamemodeEnum | string | number): Response => {
  if (Object.keys(hits).length == 0) {
    return handleErrors('Provide hits (300, 100, 50, etc)') as Response;
  };


  const geki = parseInt(hits?.geki || hits.perfect || '0');
  const h300 = parseInt(hits?.[300] || hits.great || '0');
  const katu = parseInt(hits?.katu || hits.good || '0');
  const h100 = parseInt(hits?.[100] || hits.ok || '0');
  const h50 = parseInt(hits?.[50] || hits.meh || '0');
  const h0 = parseInt(hits?.[0] || hits.miss || '0');


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
  } as Response;
};