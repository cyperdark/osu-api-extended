const num_codes: { [key: string]: string } = {
  1: 'NF',
  2: 'EZ',
  4: 'TD',
  8: 'HD',
  16: 'HR',
  32: 'SD',
  64: 'DT',
  128: 'RX',
  256: 'HT',
  576: 'NC',
  1024: 'FL',
  2048: 'AT',
  4096: 'SO',
  8192: 'AP',
  16416: 'PF',
  32768: '4K',
  65536: '5K',
  131072: '6K',
  262144: '7K',
  524288: '8K',
  1048576: 'FI',
  2097152: 'RD',
  4194304: 'LM',
  8388608: 'Target',
  16777216: '9K',
  33554432: 'KeyCoop',
  67108864: '1K',
  134217728: '3K',
  268435456: '2K',
  536870912: 'ScoreV2',
  1073741824: 'MR',
};

export const enums = {
  None: 0,
  NoFail: 1,
  Easy: 1 << 1,
  TouchDevice: 1 << 2,
  Hidden: 1 << 3,
  HardRock: 1 << 4,
  SuddenDeath: 1 << 5,
  DoubleTime: 1 << 6,
  Relax: 1 << 7,
  HalfTime: 1 << 8,
  Nightcore: 1 << 9, // DoubleTime mod
  Flashlight: 1 << 10,
  Autoplay: 1 << 11,
  SpunOut: 1 << 12,
  Relax2: 1 << 13, // Autopilot
  Perfect: 1 << 14, // SuddenDeath mod
  Key4: 1 << 15,
  Key5: 1 << 16,
  Key6: 1 << 17,
  Key7: 1 << 18,
  Key8: 1 << 19,
  FadeIn: 1 << 20,
  Random: 1 << 21,
  Cinema: 1 << 22,
  Target: 1 << 23,
  Key9: 1 << 24,
  KeyCoop: 1 << 25,
  Key1: 1 << 26,
  Key3: 1 << 27,
  Key2: 1 << 28,
  KeyMod: 521109504,
  FreeModAllowed: 522171579,
  ScoreIncreaseMods: 1049662
};

const mods_order: { [key: string]: number } = {
  nf: 0,
  ez: 1,
  hd: 2,
  dt: 3,
  nc: 3,
  ht: 3,
  hr: 4,
  so: 5,
  sd: 5,
  pf: 5,
  fl: 6,
  td: 7,
};


/**
 * 
 * @param mods Mods number
 * @returns {string} Mods name
 */
const name = (mods: number): string => {
  let enabled = [];
  let _mods = mods;
  let converted = '';

  const values = Object.keys(num_codes).map(a => Number(a));

  for (let i = values.length - 1; i >= 0; i--) {
    const v = values[i];
    if (_mods >= v) {
      const mode = num_codes[v];
      enabled.push({ i: mods_order[mode.toLowerCase()], n: mode });
      _mods -= v;
    };
  };

  enabled = enabled.sort((a, b) => (a.i > b.i ? 1 : b.i > a.i ? -1 : 0));
  enabled.filter(r => converted += r.n);


  // if (converted === '') return 'NM';
  return converted;
};

/**
 * 
 * @param mods Mods name
 * @returns {string | undefined} Mods number
 */
const id = (mods: string | number): number | undefined => {
  if (!mods) return undefined;
  if (typeof mods == 'number') return mods;

  let _mods = 0;
  const name = mods.match(/.{1,2}/g);
  if (name == null) return undefined;

  const values: string[] = Object.keys(num_codes).map((a) => a);
  for (let i = 0; i < name.length; i++) {
    const find = values.find((v) => num_codes[v].toLowerCase() === name[i].toLowerCase());
    _mods += parseInt(find);
  };

  return _mods;
};


export { id, name, num_codes };
export default { id, name, enums, num_codes };