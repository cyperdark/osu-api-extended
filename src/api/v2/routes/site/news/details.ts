import { types } from '../../../../../types/v2_site_news_details';
import { Description } from '../../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns details of the specified news post',
  params: [
    {
      type: 'string | number',
      name: 'news',
      optional: false,
      description: 'News post slug or ID',
    },
    {
      type: 'string',
      name: 'key',
      optional: false,
      description: 'Unset to query by slug, or id to query by ID',
    },
  ],
  return: 'response',
};


const name: types = async (news, key) => {
  const data = await request(`news/${news}`, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;