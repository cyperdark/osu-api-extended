export const description: any = {
  auth: 4,
  title: __filename,
  method: 'GET',
  description: 'Return total object count based on mode and hits count',
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
  }, mode: 'osu' | 'fruits' | 'taiko' | 'mania'): number;
};


const name: types = (hits, mode = 'osu') => {
  const h300 = parseInt(hits[300]);
  const h100 = parseInt(hits[100]);
  const h50 = parseInt(hits[50]);
  const h0 = parseInt(hits[0]);
  const geki = parseInt(hits.geki);
  const katu = parseInt(hits.katu);

  let total_objects = 0;

  switch (mode) {
    case 'osu':
      total_objects = h300 + h100 + h50 + h0;
      break;
    case 'taiko':
      total_objects = h300 + h100 + h0;
      break;
    case 'fruits':
      total_objects = h300 + h100 + katu + h50 + h0;
      break;
    case 'mania':
      total_objects = h300 + geki + h100 + katu + h50 + h0;
      break;
  };

  return total_objects;
};

export default name;