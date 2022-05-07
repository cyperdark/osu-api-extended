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
  1048576: 'Fl',
  2097152: 'RD',
  4194304: 'LM',
  8388608: 'Target',
  16777216: '9K',
  33554432: 'KeyCoop',
  67108864: '1K',
  134217728: '3K',
  268435456: '2K',
  536870912: 'ScoreV2',
  1073741824: 'LastMod',
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


  if (converted === '') return 'NM';
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

export { id, name };