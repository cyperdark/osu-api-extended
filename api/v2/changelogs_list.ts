import { IDefaultParams } from "../../types";
import { request } from "../../utility/request";


type params = ({
  type: 'all';
  from_build?: string;
  to_build?: string;

  stream_name?: string;
  max_id?: string;

  message_formats?: ('html' | 'markdown')[];
} | {
  type: 'lookup';

  message_formats: ('html' | 'markdown')[];
  changelog: string;
  key: string;
});


type Response<T extends params['type']> =
  T extends 'all'
  ? any
  : T extends 'lookup'
  ? any
  : never;


const name = async <T extends params>(params: T, addons: IDefaultParams) => {
  if (params.type == null) return null;

  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'all':
      url += '/changelog';
      
      object = {
        from: params.from_build,
        to: params.to_build,

        stream: params.stream_name,
        max_id: params.max_id,
        'message_formats[]': params.message_formats,
      };
      break;

    case 'lookup':
      url += `/changelog/${params.changelog}`;

      object['message_formats[]'] = params.message_formats;
      object['key'] = params.key;
      break;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons
  });


  return data as Response<T['type']>;
};


export default name;