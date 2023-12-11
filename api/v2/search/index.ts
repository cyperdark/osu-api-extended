import { request } from "../../../utility/request";
import { SearchAll } from '../../../types/v2/search_all';


type Test = ({
  type: 'site';
  mode?: 'all' | 'user' | 'wiki_page';
  query?: string;
  page?: number;
} | {
  type: 'beatmaps';
})

const name = async (obj: Test): Promise<SearchAll> => {
  const params: any = {};
  let url = 'https://osu.ppy.sh/api/v2';


  switch (obj.type) {
    case 'site':
      url += '/search';


      params.mode = obj.mode;
      params.query = obj.query;
      params.page = obj.page;
      break;
  };


  const data = await request(url, {
    method: 'GET',
    params: params,
  });

  return { type: obj.type, result: data };
};


export default name;