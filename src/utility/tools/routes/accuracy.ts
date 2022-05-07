

/**
 * 
 * @param hits.h300 count of hit 300
 * @param hits.h100 count of hit 100
 * @param hits.h50 count of hit 50
 * @param hits.h0 count of misses
 * @param hits.geki count of hit geki
 * @param hits.katu count of hit katu
 * @param mode osu | fruits | taiko | mania
 * @returns {number} Accuracy number
 */
const name = (hits: {
  300: any,
  100: any,
  50: any,
  0: any,
  geki: any,
  katu: any
}, mode: 'osu' | 'fruits' | 'taiko' | 'mania' = 'osu'): number => {
  const h300 = parseInt(hits[300]);
  const h100 = parseInt(hits[100]);
  const h50 = parseInt(hits[50]);
  const h0 = parseInt(hits[0]);
  const geki = parseInt(hits.geki);
  const katu = parseInt(hits.katu);

  let acc = 0.0;

  switch (mode) {
    case 'osu': acc = (100.0 * (6 * h300 + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + h0)); break;
    case 'taiko': acc = (100.0 * (2 * h300 + h100)) / (2 * (h300 + h100 + h0)); break;
    case 'fruits': acc = (100.0 * (h300 + h100 + h50)) / (h300 + h100 + h50 + katu + h0); break;
    case 'mania': acc = (100.0 * (6 * geki + 6 * h300 + 4 * katu + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + h0 + geki + katu)); break;
  };

  return parseFloat(acc.toFixed(2));
};

export default name;