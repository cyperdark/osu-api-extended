import { request } from "../../utility/request";
import { IDefaultParams } from "../../types";


type params = ({
  type: 'all';

  id: number;
  playlist_id: number;

  limit?: number;
  sort?: 'score_asc' | 'score_desc';

  cursor_string?: string;
} | {
  type: 'single';

  id: number;
  playlist_id: number;
  score_id: number;
} | {
  type: 'user_highest';

  id: number;
  playlist_id: number;
  user_id: number;
});


type Response<T extends params['type']> =
  T extends 'difficulty'
  ? any
  : T extends 'difficulties'
  ? any
  : never;


const name = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'all':
      url += `/rooms/${params.id}/playlist/${params.playlist_id}/scores`;

      object = {
        limit: params.limit,
        sort: params.sort,
        cursor_string: params.cursor_string,
      };
      break;

    case 'single':
      url += `/rooms/${params.id}/playlist/${params.playlist_id}/scores/${params.score_id}`;

      break;

    case 'user_highest':
      url += `/rooms/${params.id}/playlist/${params.playlist_id}/scores/users/${params.user_id}`;

      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons,
  });


  return data as Response<T['type']>;
};


export default name;