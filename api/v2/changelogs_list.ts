import { IDefaultParams, IError } from "../../types";
import { ChangelogsListAllResponse } from "../../types/v2/changelogs_list_all";
import { ChangelogsListLookupResponse } from "../../types/v2/changelogs_list_lookup";
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
  ? ChangelogsListAllResponse | IError
  : T extends 'lookup'
  ? ChangelogsListLookupResponse | IError
  : IError;


export const changelogs_list = async <T extends params>(params: T, addons?: IDefaultParams) => {
  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params.type) {
    case 'all':
      url += '/changelog';

      object.from = params.from_build;
      object.to = params.to_build;

      object.stream = params.stream_name;
      object.max_id = params.max_id;
      object['message_formats[]'] = params.message_formats;
      break;

    case 'lookup':
      url += `/changelog/${params.changelog}`;

      if (params.changelog == null) {
        return { error: new Error(`Specify changelog stream`) } as Response<T['type']>;
      };


      object['message_formats[]'] = params.message_formats;
      object['key'] = params.key;
      break;

    default:
      return { error: new Error(`Unsupported type: ${(params as any).type}`) } as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons
  });


  return data as Response<T['type']>;
};