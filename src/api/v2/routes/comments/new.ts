import { types } from '../../../../types/v2_comments_new';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamespace } from "../../../../utility/request";
const request: RequestNamespace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Posts a new comment to a comment thread',
  params: [
    {
      name: 'comment',
      params: [
        {
          type: 'string',
          name: 'commentable_id',
          optional: true,
          description: 'Resource ID the comment thread is attached to',
        },
        {
          type: 'string',
          name: 'commentable_type',
          optional: true,
          description: '\`\`\`news_post\`\`\` or \`\`\`beatmapset\`\`\`',
        },
        {
          type: 'string',
          name: 'message',
          optional: true,
          description: 'Text of the comment',
        },
        {
          type: 'string',
          name: 'parent_id',
          optional: true,
          description: 'The id of the comment to reply to, null if not a reply',
        },
      ],
    }
  ],
  return: 'response',
};


const name: types = async (object) => {
  const obj: any = {};
  if (object.commentable_id) obj['comment[commentable_id]'] = object.commentable_id;
  if (object.commentable_type) obj['comment[commentable_type]'] = object.commentable_type;
  if (object.message) obj['comment[message]'] = object.message;
  if (object.parent_id) obj['comment[parent_id]'] = object.parent_id;

  const data = await request(`comments`, {
    method: 'POST',
    params: obj,
  });

  return data;
};


export default name;