import { types } from '../../../../types/v2_comments_remove';
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
    }
  ],
  return: 'response',
};

// @ts-ignore
const name: types = async (comment_id) => {
  const data = await request(`comments/${comment_id}`, {
    method: 'DELETE',
  });

  return data;
};


export default name;