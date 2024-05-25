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
  const convertedParts = [];


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
        convertedParts.push('NF');
        break;
      case 'ez':
        mods_id += 2;
        convertedParts.push('EZ');
        break;
      case 'td':
        mods_id += 4;
        convertedParts.push('TD');
        break;
      case 'hd':
        mods_id += 8;
        convertedParts.push('HD');
        break;
      case 'hr':
        mods_id += 16;
        convertedParts.push('HR');
        break;
      case 'sd':
        mods_id += 32;
        convertedParts.push('SD');
        break;
      case 'dt':
        mods_id += 64;
        convertedParts.push('DT');
        break;
      case 'rx':
        mods_id += 128;
        convertedParts.push('RX');
        break;
      case 'ht':
        mods_id += 256;
        convertedParts.push('HT');
        break;
      case 'nc':
        mods_id += 576;
        convertedParts.push('NC');
        break;
      case 'fl':
        mods_id += 1024;
        convertedParts.push('FL');
        break;
      case 'at':
        mods_id += 2048;
        convertedParts.push('AT');
        break;
      case 'so':
        mods_id += 4096;
        convertedParts.push('SO');
        break;
      case 'ap':
        mods_id += 8192;
        convertedParts.push('AP');
        break;
      case 'pf':
        mods_id += 16416;
        convertedParts.push('PF');
        break;
      case '4k':
        mods_id += 32768;
        convertedParts.push('4K');
        break;
      case '5k':
        mods_id += 65536;
        convertedParts.push('5K');
        break;
      case '6k':
        mods_id += 131072;
        convertedParts.push('6K');
        break;
      case '7k':
        mods_id += 262144;
        convertedParts.push('7K');
        break;
      case '8k':
        mods_id += 524288;
        convertedParts.push('8K');
        break;
      case 'fi':
        mods_id += 1048576;
        convertedParts.push('FI');
        break;
      case 'rd':
        mods_id += 2097152;
        convertedParts.push('RD');
        break;
      case 'cn':
        mods_id += 4194304;
        convertedParts.push('CN');
        break;
      case 'target':
        mods_id += 8388608;
        convertedParts.push('TG');
        break;
      case '9k':
        mods_id += 16777216;
        convertedParts.push('9K');
        break;
      case 'keycoop':
        mods_id += 33554432;
        convertedParts.push('10K');
        break;
      case '1k':
        mods_id += 67108864;
        convertedParts.push('1K');
        break;
      case '3k':
        mods_id += 134217728;
        convertedParts.push('3K');
        break;
      case '2k':
        mods_id += 268435456;
        convertedParts.push('2K');
        break;
      case 'scorev2':
        mods_id += 536870912;
        convertedParts.push('v2');
        break;
      case 'mr':
        mods_id += 1073741824;
        convertedParts.push('MR');
        break;
        
        default:
        convertedParts.push(mod_name.toUpperCase());
        break;
    };
  };

  convertedParts.sort((a, b) => ModsOrder[a.toLowerCase()] - ModsOrder[b.toLowerCase()]);

  return {
    number: mods_id,
    name: convertedParts.join(''),
  } as Response;
};