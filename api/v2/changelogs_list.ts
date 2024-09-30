import { IDefaultParams, IError } from "../../types";
import { ChangelogsListAllResponse } from "../../types/v2/changelogs_list_all";
import { ChangelogsListLookupResponse } from "../../types/v2/changelogs_list_lookup";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type params = ({
  type: 'all';
  from_build?: string;
  to_build?: string;

  stream_name?: 'stable40' | 'beta40' | 'cuttingedge' | 'lazer' | 'web';
  max_id?: string;

  message_formats?: ('html' | 'markdown')[];
} | {
  type: 'lookup';

  message_formats: ('html' | 'markdown')[];
  changelog: 'stable40' | 'beta40' | 'cuttingedge' | 'lazer' | 'web';
  key: string;
});


type Response<T extends params['type']> =
  T extends 'all'
  ? ChangelogsListAllResponse & IError
  : T extends 'lookup'
  ? ChangelogsListLookupResponse & IError
  : IError;


export const changelogs_list = async <T extends params>(params: T, addons?: IDefaultParams) => {
  let object: any = {};
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'GET';


  switch (params?.type) {
    case 'all':
      url += '/changelog';

      if (params?.from_build != null) object.from = params.from_build;
      if (params?.to_build != null) object.to = params.to_build;

      if (params?.stream_name != null) object.stream = params.stream_name;
      if (params?.max_id != null) object.max_id = params.max_id;
      if (params?.message_formats != null) object['message_formats[]'] = params.message_formats;
      break;

    case 'lookup':
      url += `/changelog/${params.changelog}`;

      if (params?.changelog != null == null) {
        return handleErrors(`Specify changelog stream`) as Response<T['type']>;
      };


      if (params?.message_formats != null) object['message_formats[]'] = params.message_formats;
      if (params?.key != null) object['key'] = params.key;
      break;

    default:
      return handleErrors(`Unsupported type: ${(params as any)?.type}`) as Response<T['type']>;
  };


  const data = await request(url, {
    method: method,
    params: object,
    addons
  });

  if (data.error) return handleErrors(data.error) as Response<T['type']>;


  return data as Response<T['type']>;
};