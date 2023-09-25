import { request } from "../utility/request";
import FS from "fs/promises";
import path from "path";
import fs from "fs";


export interface types {
  (difficulty_id: number, file_path: string, overwrite?: boolean): Promise<string | null>;
};


const name: types = async (difficulty_id, file_path, overwrite) => {
  const { dir } = path.parse(file_path);
  if (!fs.existsSync(dir))
    FS.mkdir(file_path, { recursive: true });


  if (fs.existsSync(file_path) && overwrite != true)
    return file_path;


  const data = await request(`https://osu.ppy.sh/osu/${difficulty_id}`, { method: "GET" });
  if (!data.includes('osu file format v')) return null;


  FS.writeFile(file_path, data, 'utf-8');
  return file_path;
};

export default name;