import { request } from "../../../request";
import fs from "fs";

/**
 * 
 * @param diff_id Beatmap id
 * @param path Path to folder (without name and extension)
 * @param name File name
 * @returns Download .osu file of beatmap by id
 */
const name = async (diff_id: number, path: string, name: string | number): Promise<string> => {
  let file = '';
  if (name === undefined) name = diff_id;
  if (path !== undefined) file = `${path}/${name}.osu`;
  else file = `${name}.osu`;

  // if (fs.existsSync(file)) return file;

  const data = await request(`https://osu.ppy.sh/osu/${diff_id}`, { method: "GET" });
  fs.writeFileSync(file, data, 'utf-8');
  return file;
};

export default name;