import { request } from "../../utility/request";
import { IDefaultParams, IError } from "../../types";
import { handleErrors } from "../../utility/handleErrors";
import { credentials } from "../../utility/auth";


type params = ({
  type: 'verify';
  code: string,
} | {
  type: 'reissue';
} | {
  type: 'delete';
});


type Response<T extends params['type']> =
  T extends 'verify'
  ? "" & IError
  : T extends 'reissue'
  ? { message: string } & IError
  : T extends 'delete'
  ? '' & IError
  : IError;


// FIXME?
export const session_actions = async <T extends params>(params: T, addons?: IDefaultParams): Promise<Response<T['type']>> => {
  let url = 'https://osu.ppy.sh/api/v2';
  let method = 'POST';

  const headers: any = {};
  let body: any = '';


  switch (params?.type) {
    case 'verify':
      if (credentials.type != 'lazer') {
        return handleErrors(`Login via lazer to use this endpoint`);
      };

      if (params?.code == null) {
        return handleErrors(`Specify verification code`) as Response<T['type']>;
      };

      url += `/session/verify`;


      const boundary = `----WebKitFormBoundary${Math.random().toString(16).substring(2)}`;
      body += `--${boundary}\r\n`;
      body += 'Content-Disposition: form-data; name="verification_key"\r\n\r\n';
      body += `${params.code}\r\n`;
      body += `--${boundary}--\r\n`;

      headers['Content-Type'] = `multipart/form-data; boundary=${boundary}`;
      headers['Content-Length'] = Buffer.byteLength(body);
      break;

    case 'reissue':
      if (credentials.type != 'lazer') {
        return handleErrors(`Login via lazer to use this endpoint`);
      };

      url += `/session/verify/reissue`;

      break;

    case 'delete':
      url += `/oauth/tokens/current`;
      method = 'DELETE';

      break;
  };


  const data = await request(url, {
    method: method,
    data: body,
    headers: headers,
    addons,
  });

  if (data.error) return handleErrors(data.error) as Response<T['type']>;


  return data as Response<T['type']>;
};