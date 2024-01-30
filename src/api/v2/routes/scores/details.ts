import { types } from '../../../../types/v2_scores_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return data for a score',
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
  ],
  return: 'response',
};


const name: types = async (score_id, mode) => {
  const data = await request(`scores/${score_id}`, {
    method: 'GET',
  });

  return data;
};


export default name;