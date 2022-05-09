import { name as mods_name } from "../../mods";

export const description: any = {
  auth: 4,
  title: __filename,
  method: 'GET',
  description: 'Return rank letter from hits',
  params: [
    {
      type: 'string',
      name: '300',
      optional: false,
      description: 'Amount of 300',
    },
    {
      type: 'string',
      name: 'geki',
      optional: false,
      description: 'Amount of geki (300g)',
    },
    {
      type: 'string',
      name: '100',
      optional: false,
      description: 'Amount of 100',
    },
    {
      type: 'string',
      name: 'katu',
      optional: false,
      description: 'Amount of katu (100k)',
    },
    {
      type: 'string',
      name: '50',
      optional: false,
      description: 'Amount of 50',
    },
    {
      type: 'string',
      name: '0',
      optional: false,
      description: 'Amount of misses',
    },
    {
      type: 'string',
      name: 'mods',
      optional: false,
      description: 'Name of the mods \`\`\`HDDT\`\`\` or mods number \`\`\`72\`\`\`',
    },
    {
      type: 'string',
      name: 'mode',
      optional: false,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
  ],
};

export interface types {
  (hits: {
    300: string,
    100: string,
    50: string,
    0: string,
    geki: string,
    katu: string
  }, mods: any, mode: 'osu' | 'fruits' | 'taiko' | 'mania'): string;
};

const name: types = (hits, mods, mode = 'osu'): string => {
  const h300 = parseInt(hits[300]);
  const h100 = parseInt(hits[100]);
  const h50 = parseInt(hits[50]);
  const h0 = parseInt(hits[0]);
  const geki = parseInt(hits.geki);
  const katu = parseInt(hits.katu);
  
  if (!isNaN(mods)) mods = mods_name(mods);
  const silver = mods.toLowerCase().indexOf('hd') > -1 ? true : mods.toLowerCase().indexOf('fl') > -1 ? true : false;

  let total = 0;
  let acc = 0.0;

  let r300 = 0;
  let r50 = 0;

  let rank = '';

  switch (mode) {
    case 'osu':
      total = +h300 + +h100 + +h50 + +h0;
      acc = total > 0 ? (+h50 * 50 + +h100 * 100 + +h300 * 300) / (total * 300) : 1;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (r300 === 1) rank = silver ? 'XH' : 'X';
      else if (r300 > 0.9 && r50 < 0.01 && h0 === 0) rank = silver ? 'SH' : 'S';
      else if ((r300 > 0.8 && h0 === 0) || r300 > 0.9) rank = 'A';
      else if ((r300 > 0.7 && h0 === 0) || r300 > 0.8) rank = 'B';
      else if (r300 > 0.6) rank = 'C';
      else rank = 'D';

      break;

    case 'taiko':
      total = +h300 + +h100 + +h50 + +h0;
      acc = total > 0 ? (+h100 * 150 + +h300 * 300) / (total * 300) : 1;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (r300 === 1) rank = silver ? 'XH' : 'X';
      else if (r300 > 0.9 && r50 < 0.01 && h0 === 0) rank = silver ? 'SH' : 'S';
      else if ((r300 > 0.8 && h0 === 0) || r300 > 0.9) rank = 'A';
      else if ((r300 > 0.7 && h0 === 0) || r300 > 0.8) rank = 'B';
      else if (r300 > 0.6) rank = 'C';
      else rank = 'D';

      break;

    case 'fruits':
      total = +h300 + +h100 + +h50 + +h0 + +katu;
      acc = total > 0 ? (+h50 + +h100 + +h300) / total : 1;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (acc === 1) rank = silver ? 'XH' : 'X';
      else if (acc > 0.98) rank = silver ? 'SH' : 'S';
      else if (acc > 0.94) rank = 'A';
      else if (acc > 0.9) rank = 'B';
      else if (acc > 0.85) rank = 'C';
      else rank = 'D';

      break;

    case 'mania':
      total = +h300 + +h100 + +h50 + +h0 + +geki + +katu;
      acc = total > 0 ? (+h50 * 50 + +h100 * 100 + +katu * 200 + (+h300 + +geki) * 300) / (total * 300) : 1;

      r300 = +h300 / total;
      r50 = +h50 / total;

      if (acc === 1) rank = silver ? 'XH' : 'X';
      else if (acc > 0.95) rank = silver ? 'SH' : 'S';
      else if (acc > 0.9) rank = 'A';
      else if (acc > 0.8) rank = 'B';
      else if (acc > 0.7) rank = 'C';
      else rank = 'D';

      break;
  };

  return rank;
};

export default name;