import { download, namespace, RequestNamepsace } from "../../../../utility/request";


export const description: any = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Download score replay file',
  params: [
    {
      type: 'number',
      name: 'score_id',
      optional: true,
      description: 'id of the score',
    },
    {
      type: 'string',
      name: 'mode',
      optional: true,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string',
      name: 'file_path',
      optional: true,
      description: 'File path with \`\`\`.osr\`\`\` at the end',
    },
  ],
};

export interface types {
  (score_id: number, mode: 'osu' | 'fruits' | 'mania' | 'taiko', file_path: string): Promise<string>;
};


const name: types = async (score_id, mode, file_path) => {
  const data = await download(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}/download`, file_path);
  return data;
};


export default name;