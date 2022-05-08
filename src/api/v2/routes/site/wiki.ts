import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
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
};

export interface types {
  (language: string, path: string): Promise<response>;
};

export interface response {
  available_locales: string[];
  layout: string;
  locale: string;
  markdown: string;
  path: string;
  subtitle: null;
  tags: string[];
  title: string;
}


const name: types = async (language, path) => {
  const data = await request(`wiki/${language}/${path}`, {
    method: 'GET',
  });

  return data;
};


export default name;