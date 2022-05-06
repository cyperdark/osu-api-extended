import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (language: string, path: string): Promise<{
    available_locales: string[];
    layout: string;
    locale: string;
    markdown: string;
    path: string;
    subtitle: null;
    tags: string[];
    title: string;
  }>;
};


const name: types = async (language, path) => {
  const data = await request(`wiki/${language}/${path}`, {
    method: 'GET',
  });

  return data;
};


export default name;