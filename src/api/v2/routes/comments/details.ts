import { types } from '../../../../types/v2_comments_details';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Gets a comment and its replies up to 2 levels deep',
  params: [
    {
      type: 'number',
      name: 'comment',
      optional: false,
      description: 'id of the comment',
    },
  ],
};


const name: types = async (comment) => {
  const data = await request(`comments/${comment}`, {
    method: 'GET',
  });

  return data;
};


export default name;