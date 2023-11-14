import { request } from "../utility/request";
import path from "path";
import fs from "fs";


export interface types {
  (difficulty_id: number, file_path: string, overwrite?: boolean): Promise<{ type: 'created' | 'exists' | 'rate-limit', path?: string }>;
};


const name: types = (difficulty_id, file_path, overwrite) => new Promise(async (resolve, reject) => {
  const { dir } = path.parse(file_path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });


  if (fs.existsSync(file_path) && overwrite != true) {
    resolve({
      type: 'exists',
      path: file_path,
    });
    return;
  };


  const data = await request(`https://osu.ppy.sh/osu/${difficulty_id}`, { method: "GET" });
  fs.writeFile(file_path, data, 'utf8', (err) => {
    if (err) {
      reject(err);
      return;
    };


    resolve({
      type: data.includes('429 Too Many Requests') ? 'rate-limit' : 'created',
      path: file_path,
    });
  });
});

export default name;