import { types } from '../../../../types/v2_site_wiki';
import { Description } from '../../../../utility/types';


import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: Description = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Return data about wiki page',
  params: [
    {
      type: 'string',
      name: 'language',
      optional: false,
      description: 'Language code of the wiki page',
    },
    {
      type: 'string',
      name: 'path',
      optional: false,
      description: 'The path name of the wiki page',
    },
  ],
  return: 'response',
};


const name: types = async (language, path) => {
  const data = await request(`wiki/${language}/${path}`, {
    method: 'GET',
  });

  return data;
};


export default name;