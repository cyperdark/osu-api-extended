import fs from "fs";
import flags from "./flags";
import { request } from "./request";
import { pp_calc_object } from "../types/tools";
import { name as mods_name } from "./mods";

/**
 * 
 * @param flag Country code
 * @returns {string} Fullname of country
 */
const country = (flag: string): string => {
  const find = flags.find(r => r.flag.toLowerCase() == flag.toLowerCase());

  if (!find) return null;

  return find.country;
};

/**
 * 
 * @param h300 count of hit 300
 * @param h100 count of hit 100
 * @param h50 count of hit 50
 * @param h0 count of misses
 * @param geki count of hit geki
 * @param katu count of hit katu
 * @param mode osu | fruits | taiko | mania
 * @returns {number} Accuracy number
 */
const accuracy = (h300: number, h100: number, h50: number, h0: number, geki: number, katu: number, mode: 'osu' | 'fruits' | 'taiko' | 'mania'): number => {
  let acc = 0.0;

  switch (mode) {
    case 'osu': acc = (100.0 * (6 * h300 + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + h0)); break;
    case 'taiko': acc = (100.0 * (2 * h300 + h100)) / (2 * (h300 + h100 + h0)); break;
    case 'fruits': acc = (100.0 * (h300 + h100 + h50)) / (h300 + h100 + h50 + katu + h0); break;
    case 'mania': acc = (100.0 * (6 * geki + 6 * h300 + 4 * katu + 2 * h100 + h50)) / (6 * (h50 + h100 + h300 + h0 + geki + katu)); break;
  };

  return parseFloat(acc.toFixed(2));
};

/**
 * 
 * @param diff_id Beatmap id
 * @param path Path to folder (without name and extension)
 * @param name File name
 * @returns Download .osu file of beatmap by id
 */
const diff_file = async (diff_id: number, path: string, name: string | number): Promise<string> => {
  let file = '';
  if (name === undefined) name = diff_id;
  if (path !== undefined) file = `${path}/${name}.osu`;
  else file = `${name}.osu`;

  // if (fs.existsSync(file)) return file;

  const data = await request(`https://osu.ppy.sh/osu/${diff_id}`);
  fs.writeFileSync(file, data, 'utf-8');
  return file;
};

/**
 * 
 * @param id Beatmap id
 * @param mods Mods number
 * @param combo Max combo
 * @param miss Misses
 * @param acc Accuracy
 * @returns {pp_calc_object | undefined} Json data
 */
const pp_calc = async (id: number, mods?: number, combo?: number, miss?: number, acc?: number): Promise<pp_calc_object> | undefined => {
  const { data } = await request('https://pp.osuck.net/pp', { method: 'GET', params: { id, mods, combo, miss, acc } });
  if (!data.id) return null;

  return data;
};

/**
 * 
 * @param h300 count of hit 300
 * @param h100 count of hit 100
 * @param h50 count of hit 50
 * @param h0 count of misses
 * @param geki count of hit geki
 * @param katu count of hit katu
 * @param mods Mods name or number
 * @param mode osu | fruits | taiko | mania
 * @returns {string} Rank letter
 */
const rank = (h300: number, h100: number, h50: number, h0: number, geki: number, katu: number, mods: any, mode: 'osu' | 'fruits' | 'taiko' | 'mania'): string => {
  if (isNaN(mods)) mods = mods_name(mods);
  const silver = mods.toLowerCase().indexOf('hd') > -1 ? true : mods.toLowerCase().indexOf('fl') > -1 ? true : false;

  let total = 0;
  let acc = 0.0;

  let r300 = 0;
  let r50 = 0;

  let rank = '';

  switch (mode) {
    case 'osu':
      total = +h300 + +h100 + +h300 + +h0;
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
      total = +h300 + +h100 + +h300 + +h0;
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
      total = +h300 + +h100 + +h300 + +h0 + +katu;
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
      total = +h300 + +h100 + +h300 + +h0 + +geki + +katu;
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

export { country, accuracy, diff_file, pp_calc, rank };