import { types } from '../../../../types/v2_comments_vote';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Delete your comment by id',
  params: [
    {
      type: 'number',
      name: 'comment_id',
      description: 'Comment id',
    },
    {
      type: 'boolean',
      name: 'type',
      options: false,
      description: '\`\`\`true\`\`\` (Upvote) or \`\`\`false\`\`\` (Downvote)',
    },

  ],
  return: 'response',
};


const name: types = async (comment_id, type) => {
  const data = await request(`comments/${comment_id}/vote`, {
    method: type == true ? 'POST' : 'DELETE',
  });

  return data;
};


export default name;