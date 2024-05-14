import { IError } from "../types";
import { ModsOrder } from "../types/enums";
import { Mod } from "../types/mods";
import { ModsResponse } from "../types/tools";
import { handleErrors } from "../utility/handleErrors";



// WHILE LOOP FASTER dot
const bitValues = [
  'NF', 'EZ', 'TD', 'HD', 'HR', 'SD', 'DT', 'RX', 'HT', 'NC',
  'FL', 'AT', 'SO', 'AP', 'PF', '4K', '5K', '6K', '7K', '8K',
  'FI', 'RD', 'CN', 'TG', '9K', '10K', '1K', '3K', '2K', 'v2'
];

export const ModsToName = (modsNumber: number, order?: boolean): string => {
  let bit = 1;


  if (order == true) {
    const convertedParts = [];

    while (bit <= modsNumber && bit <= (1 << 30)) {
      if (modsNumber & bit) {
        convertedParts.push(bitValues[Math.log2(bit)]);
      };
      bit <<= 1;
    };

    convertedParts.sort((a, b) => ModsOrder[a.toLowerCase()] - ModsOrder[b.toLowerCase()]);

    const converted = convertedParts.join('');
    return converted;
  };


  let convertedParts = '';

  while (bit <= modsNumber && bit <= (1 << 30)) {
    if (modsNumber & bit) {
      convertedParts += bitValues[Math.log2(bit)];
    }
    bit <<= 1;
  };

  return convertedParts;
};


type Response = ModsResponse & IError;


// SWITCH STATEMENT CREATED ON PURPOSE BECAUSE IT'S WAY FASTER
export const calculate_mods = (ModsName: Mod[] | string | number, order?: boolean): Response => {
  if (ModsName == null) {
    return handleErrors(`Specify mods name (HDDT or 72)`) as Response;
  };


  if (typeof ModsName == 'number') {
    const name = ModsToName(ModsName, order);
    return {
      number: ModsName,
      name: name,
    } as any;
  };


  let mods_id = 0;
  let ModsArray = [];

  if (Array.isArray(ModsName)) {
    ModsArray = ModsName.map(r => r.acronym.toLowerCase());
  }

  else {
    ModsArray = ModsName.toLowerCase().match(/.{1,2}/g);
  };


  if (!Array.isArray(ModsArray)) {
    return handleErrors(`Can't convert mods (${ModsName}) to array of mods`) as Response;
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