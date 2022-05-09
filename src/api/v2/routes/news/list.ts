import { namespace, RequestNamepsace } from "../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  auth: 1,
  title: __filename,
  method: 'GET',
  description: 'Returns a list of news posts and related metadata',
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
};

export interface types {
  (obj: {
    limit?: number,
    year?: number,
    cursorPublished?: string,
    cursorId?: number
  }): Promise<response>;
};

export interface response {
  cursor: {
    published_at: string;
    id: number;
  };
  news_posts: {
    id: number;
    author: string;
    edit_url: string;
    first_image: string;
    published_at: string;
    updated_at: string;
    slug: string;
    title: string;
    preview: string;
  }[];
  news_sidebar: {
    current_year: number;
    news_posts: {
      id: number;
      author: string;
      edit_url: string;
      first_image: string;
      published_at: string;
      updated_at: string;
      slug: string;
      title: string;
    }[];
    years: number[];
  };
  search: {
    limit: number;
    sort: string;
    year: string;
  };
}



const name: types = async (obj) => {
  const data = await request(`news`, {
    method: 'GET',
    params: obj,
  });

  return data;
};


export default name;