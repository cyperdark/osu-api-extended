import { IError } from "../types";
import { ModsCodes, ModsOrder } from "../types/enums";




export const ModsToName = (modsNumber: number): string => {
  const convertedParts = [];
  const values = Object.keys(ModsCodes);
  let mods_id = modsNumber;


  for (let i = values.length - 1; i >= 0 && mods_id > 0; i--) {
    const v = values[i];
    if (mods_id >= +v) {
      const mode = ModsCodes[v];
      convertedParts.push(mode);
      mods_id -= +v;
    };
  };


  convertedParts.sort((a, b) => ModsOrder[a.toLowerCase()] - ModsOrder[b.toLowerCase()]);


  const converted = convertedParts.join('');
  return converted;
};


export const calculate_mods = (ModsName: string | number): { number: number, name: string } | IError => {
  if (ModsName == null) {
    return { error: new Error(`Specify mods name (HDDT or 72)`) };
  };


  if (typeof ModsName == 'number') {
    const name = ModsToName(ModsName);
    return {
      number: ModsName,
      name: name,
    };
  };


  let mods_id = 0;
  const ModsArray = ModsName.match(/.{1,2}/g);
  if (!Array.isArray(ModsArray)) {
    return { error: new Error(`Can't convert mods (${ModsName}) to array of mods`) };
  };


  const codes = Object.keys(ModsCodes);
  for (let i = 0; i < ModsArray.length; i++) {
    const mod_name = ModsArray[i];

    const find = codes.find(v => ModsCodes[v].toLowerCase() === mod_name?.toLowerCase());
    if (find == null) continue;

    mods_id += parseInt(find);
  };


  return {
    number: mods_id,
    name: ModsName,
  };
};



export const calculate_mods_switch = (ModsName: string | number): { number: number, name: string } | IError => {
  if (ModsName == null) {
    return { error: new Error(`Specify mods name (HDDT or 72)`) };
  };


  if (typeof ModsName == 'number') {
    const name = ModsToName(ModsName);
    return {
      number: ModsName,
      name: name,
    };
  };


  let mods_id = 0;

  const ModsArray = ModsName.toLowerCase().match(/.{1,2}/g);
  if (!Array.isArray(ModsArray)) {
    return { error: new Error(`Can't convert mods (${ModsName}) to array of mods`) };
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
  };
};


export const calculate_mods_if = (ModsName: string | number): { number: number, name: string } | IError => {
  if (ModsName == null) {
    return { error: new Error(`Specify mods name (HDDT or 72)`) };
  }

  if (typeof ModsName === 'number') {
    return {
      number: ModsName,
      name: ModsToName(ModsName),
    };
  }


  let mods_id = 0;
  let mods_name = ModsName.toLowerCase();

  if (mods_name.includes('nf')) {
    mods_id += 1;
  }
  if (mods_name.includes('ez')) {
    mods_id += 2;
  }
  if (mods_name.includes('td')) {
    mods_id += 4;
  }
  if (mods_name.includes('hd')) {
    mods_id += 8;
  }
  if (mods_name.includes('hr')) {
    mods_id += 16;
  }
  if (mods_name.includes('sd')) {
    mods_id += 32;
  }
  if (mods_name.includes('dt')) {
    mods_id += 64;
  }
  if (mods_name.includes('rx')) {
    mods_id += 128;
  }
  if (mods_name.includes('ht')) {
    mods_id += 256;
  }
  if (mods_name.includes('nc')) {
    mods_id += 576;
  }
  if (mods_name.includes('fl')) {
    mods_id += 1024;
  }
  if (mods_name.includes('at')) {
    mods_id += 2048;
  }
  if (mods_name.includes('so')) {
    mods_id += 4096;
  }
  if (mods_name.includes('ap')) {
    mods_id += 8192;
  }
  if (mods_name.includes('pf')) {
    mods_id += 16416;
  }
  if (mods_name.includes('4k')) {
    mods_id += 32768;
  }
  if (mods_name.includes('5k')) {
    mods_id += 65536;
  }
  if (mods_name.includes('6k')) {
    mods_id += 131072;
  }
  if (mods_name.includes('7k')) {
    mods_id += 262144;
  }
  if (mods_name.includes('8k')) {
    mods_id += 524288;
  }
  if (mods_name.includes('fi')) {
    mods_id += 1048576;
  }
  if (mods_name.includes('rd')) {
    mods_id += 2097152;
  }
  if (mods_name.includes('lm')) {
    mods_id += 4194304;
  }
  if (mods_name.includes('target')) {
    mods_id += 8388608;
  }
  if (mods_name.includes('9k')) {
    mods_id += 16777216;
  }
  if (mods_name.includes('keycoop')) {
    mods_id += 33554432;
  }
  if (mods_name.includes('1k')) {
    mods_id += 67108864;
  }
  if (mods_name.includes('3k')) {
    mods_id += 134217728;
  }
  if (mods_name.includes('2k')) {
    mods_id += 268435456;
  }
  if (mods_name.includes('scorev2')) {
    mods_id += 536870912;
  }
  if (mods_name.includes('mr')) {
    mods_id += 1073741824;
  }


  return {
    number: mods_id,
    name: ModsName,
  };
};