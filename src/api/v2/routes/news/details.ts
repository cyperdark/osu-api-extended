import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns details of the specified news post',
  params: [
    {
      type: 'string/number',
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
};

export interface types {
  (news: string | number, key?: 'id'): Promise<response>;
};

export interface response {
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
    newer: {
      id: number;
      author: string;
      edit_url: string;
      first_image: string;
      published_at: string;
      updated_at: string;
      slug: string;
      title: string;
    };
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
}



const name: types = async (news, key) => {
  const data = await request(`news/${news}`, {
    method: 'GET',
    params: { key },
  });

  return data;
};


export default name;