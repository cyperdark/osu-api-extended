import { types } from '../../../../../types/v2_site_news_list';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns a list of news posts and related metadata',
  params: [
    {
      name: 'object',
      params: [
        {
          type: 'number',
          name: 'limit',
          optional: true,
          description: 'Maximum number of posts (12 default, 1 minimum, 21 maximum)',
        },
        {
          type: 'number',
          name: 'year',
          optional: true,
          description: 'Year to return posts from',
        },
        {
          type: 'string',
          name: 'cursorPublished',
          optional: true,
          description: 'Pagination cursorPublished',
        },
        {
          type: 'number',
          name: 'cursorId',
          optional: true,
          description: 'Pagination cursorId',
        },
      ],
    }
  ],
  return: 'response',
};


const name: types = async (obj) => {
  const data = await request(`news`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;