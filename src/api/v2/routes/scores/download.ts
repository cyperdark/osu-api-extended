import { types } from '../../../../types/v2_scores_download';
import { Description } from '../../../../utility/types';


import { download, namespace, RequestNamepsace } from "../../../../utility/request";


export const description: Description = {
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Download score replay file',
  params: [
    {
      type: 'number',
      name: 'score_id',
      optional: false,
      description: 'id of the score',
    },
    {
      type: 'string',
      name: 'mode',
      optional: false,
      description: '\`\`\`osu\`\`\` or \`\`\`fruits\`\`\` or \`\`\`mania\`\`\` or \`\`\`taiko\`\`\`',
    },
    {
      type: 'string',
      name: 'file_path',
      optional: false,
      description: 'File path with \`\`\`.osr\`\`\` at the end',
    },
  ],
  return: 'string',
};


const name: types = async (score_id, mode, file_path) => {
  const data = await download(`https://osu.ppy.sh/api/v2/scores/${mode}/${score_id}/download`, file_path);
  return data;
};


export default name;