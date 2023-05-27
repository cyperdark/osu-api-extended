import { request } from "../../../request";
import fs from "fs";


export const description: any = {
  auth: 4,
  title: __filename,
  method: 'GET',
  description: 'Download \`\`\`.osu\`\`\` file',
  params: [
    {
      type: 'number',
      name: 'diff_id',
      optional: false,
      description: 'id of the beatmap',
    },
    {
      type: 'number',
      name: 'path',
      optional: false,
      description: 'Folder path',
    },
    {
      type: 'string',
      name: 'name',
      optional: false,
      description: 'File name (without extension)',
    },
    {
      type: 'boolean',
      name: 'overwrite',
      optional: true,
      description: 'Overwrite file',
    },
  ],
};

export interface types {
  (diff_id: number, path: string, name: string | number, overwrite?: boolean): Promise<string | null>;
};


const name: types = async (diff_id, path, name, overwrite) => {
  if (!fs.existsSync(path)) fs.mkdirSync(path, { recursive: true });

  let file = '';
  if (name === undefined) name = diff_id;
  if (path !== undefined) file = `${path}/${name}.osu`;
  else file = `${name}.osu`;

  if (fs.existsSync(file) && overwrite != true) return file;

  const data = await request(`https://osu.ppy.sh/osu/${diff_id}`, { method: "GET" });
  if (!data.includes('osu file format v')) return null;

  fs.writeFileSync(file, data, 'utf-8');
  return file;
};

export default name;