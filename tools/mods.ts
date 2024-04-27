import { IError } from "../types";
import { ModsOrder } from "../types/enums";
import { ModsResponse } from "../types/tools";



// WHILE LOOP FASTER dot
export const ModsToName = (modsNumber: number, order?: boolean): string => {
  const convertedParts = [];
  let bit = 1;


  while (bit <= modsNumber) {
    switch (bit) {
      case 1:
        if (modsNumber & bit) convertedParts.push('NF');
        break;
      case 2:
        if (modsNumber & bit) convertedParts.push('EZ');
        break;
      case 4:
        if (modsNumber & bit) convertedParts.push('TD');
        break;
      case 8:
        if (modsNumber & bit) convertedParts.push('HD');
        break;
      case 16:
        if (modsNumber & bit) convertedParts.push('HR');
        break;
      case 32:
        if (modsNumber & bit) convertedParts.push('SD');
        break;
      case 64:
        if (modsNumber & bit) convertedParts.push('DT');
        break;
      case 128:
        if (modsNumber & bit) convertedParts.push('RX');
        break;
      case 256:
        if (modsNumber & bit) convertedParts.push('HT');
        break;
      case 576:
        if (modsNumber & bit) convertedParts.push('NC');
        break;
      case 1024:
        if (modsNumber & bit) convertedParts.push('FL');
        break;
      case 2048:
        if (modsNumber & bit) convertedParts.push('AT');
        break;
      case 4096:
        if (modsNumber & bit) convertedParts.push('SO');
        break;
      case 8192:
        if (modsNumber & bit) convertedParts.push('AP');
        break;
      case 16416:
        if (modsNumber & bit) convertedParts.push('PF');
        break;
      case 32768:
        if (modsNumber & bit) convertedParts.push('4K');
        break;
      case 65536:
        if (modsNumber & bit) convertedParts.push('5K');
        break;
      case 131072:
        if (modsNumber & bit) convertedParts.push('6K');
        break;
      case 262144:
        if (modsNumber & bit) convertedParts.push('7K');
        break;
      case 524288:
        if (modsNumber & bit) convertedParts.push('8K');
        break;
      case 1048576:
        if (modsNumber & bit) convertedParts.push('FI');
        break;
      case 2097152:
        if (modsNumber & bit) convertedParts.push('RD');
        break;
      case 4194304:
        if (modsNumber & bit) convertedParts.push('LM');
        break;
      case 8388608:
        if (modsNumber & bit) convertedParts.push('Target');
        break;
      case 16777216:
        if (modsNumber & bit) convertedParts.push('9K');
        break;
      case 33554432:
        if (modsNumber & bit) convertedParts.push('KeyCoop');
        break;
      case 67108864:
        if (modsNumber & bit) convertedParts.push('1K');
        break;
      case 134217728:
        if (modsNumber & bit) convertedParts.push('3K');
        break;
      case 268435456:
        if (modsNumber & bit) convertedParts.push('2K');
        break;
      case 536870912:
        if (modsNumber & bit) convertedParts.push('ScoreV2');
        break;
      case 1073741824:
        if (modsNumber & bit) convertedParts.push('MR');
        break;
      default:
        break;
    };


    bit <<= 1;
  };


  if (order) {
    convertedParts.sort((a, b) => ModsOrder[a.toLowerCase()] - ModsOrder[b.toLowerCase()]);
  };


  const converted = convertedParts.join('');
  return converted;
};


type Response = ModsResponse & IError;


// SWITCH STATEMENT CREATED ON PURPOSE BECAUSE IT'S WAY FASTER
export const calculate_mods = (ModsName: string | number, order?: boolean): Response => {
  if (ModsName == null) {
    return { error: new Error(`Specify mods name (HDDT or 72)`) } as Response;
  };


  if (typeof ModsName == 'number') {
    const name = ModsToName(ModsName, order);
    return {
      number: ModsName,
      name: name,
    } as any;
  };


  let mods_id = 0;

  const ModsArray = ModsName.toLowerCase().match(/.{1,2}/g);
  if (!Array.isArray(ModsArray)) {
    return { error: new Error(`Can't convert mods (${ModsName}) to array of mods`) } as Response;
  };


  for (let i = 0; i < ModsArray.length; i++) {
    const mod_name = ModsArray[i];
    switch (mod_name) {
      case 'nf':
        mods_id += 1;
        break;
      case 'ez':
        mods_id += 2;
        break;
      case 'td':
        mods_id += 4;
        break;
      case 'hd':
        mods_id += 8;
        break;
      case 'hr':
        mods_id += 16;
        break;
      case 'sd':
        mods_id += 32;
        break;
      case 'dt':
        mods_id += 64;
        break;
      case 'rx':
        mods_id += 128;
        break;
      case 'ht':
        mods_id += 256;
        break;
      case 'nc':
        mods_id += 576;
        break;
      case 'fl':
        mods_id += 1024;
        break;
      case 'at':
        mods_id += 2048;
        break;
      case 'so':
        mods_id += 4096;
        break;
      case 'ap':
        mods_id += 8192;
        break;
      case 'pf':
        mods_id += 16416;
        break;
      case '4k':
        mods_id += 32768;
        break;
      case '5k':
        mods_id += 65536;
        break;
      case '6k':
        mods_id += 131072;
        break;
      case '7k':
        mods_id += 262144;
        break;
      case '8k':
        mods_id += 524288;
        break;
      case 'fi':
        mods_id += 1048576;
        break;
      case 'rd':
        mods_id += 2097152;
        break;
      case 'lm':
        mods_id += 4194304;
        break;
      case 'target':
        mods_id += 8388608;
        break;
      case '9k':
        mods_id += 16777216;
        break;
      case 'keycoop':
        mods_id += 33554432;
        break;
      case '1k':
        mods_id += 67108864;
        break;
      case '3k':
        mods_id += 134217728;
        break;
      case '2k':
        mods_id += 268435456;
        break;
      case 'scorev2':
        mods_id += 536870912;
        break;
      case 'mr':
        mods_id += 1073741824;
        break;
    };
  };


  return {
    number: mods_id,
    name: ModsName,
  } as Response;
};