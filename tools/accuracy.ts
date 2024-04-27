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
};

type Response = AccuracyResponse & IError;



export const calculate_accuracy = (hits: Hits, mode: GamemodeEnum | string | number): Response => {
  if (Object.keys(hits).length == 0) {
    return handleErrors('Provide hits (300, 100, 50, etc)') as Response;
  };


  const geki = parseInt(hits?.geki || hits.perfect || '0');
  const h300 = parseInt(hits?.[300] || hits.great || '0');
  const katu = parseInt(hits?.katu || hits.good || '0');
  const h100 = parseInt(hits?.[100] || hits.ok || '0');
  const h50 = parseInt(hits?.[50] || hits.meh || '0');
  const h0 = parseInt(hits?.[0] || hits.miss || '0');

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
      return handleErrors(`Unsupported gamemode: ${mode}}`) as Response;
  };


  return {
    accuracy,
    fc_accuracy,
  } as Response;
};