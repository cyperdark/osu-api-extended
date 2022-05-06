import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export interface types {
  (news: string | number, key: 'id'): Promise<{
    id: number;
    author: string;
    edit_url: string;
    first_image: string;
    published_at: string;
    updated_at: string;
    slug: string;
    title: string;
    content: string;
    navigation: {
      older: {
        id: number;
        author: string;
        edit_url: string;
        first_image: string;
        published_at: string;
        updated_at: string;
        slug: string;
        title: string;
      };
    };
  }>;
};


const name: types = async (news, key) => {
  const data = await request(`news/${news}`, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;