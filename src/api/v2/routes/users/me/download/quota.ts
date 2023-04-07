import { namespace, RequestNamepsace } from "../../../../../../utility/request";
const request: RequestNamepsace = namespace('https://osu.ppy.sh/api/v2/');


export const description: any = {
  type: false,
  auth: 0,
  title: __filename,
  method: 'GET',
  description: 'Return user download quota number?',
  params: [

  ],
};

export interface types {
  /**
   * Return user download quota number?
   * 
   * ## Example 
   * 
   * ```js
   * const { v2, auth } = require('osu-api-extended');
   * 
   * const main = async () => {
   *   await auth.login_lazer(USERNAME, USER_PASSWORD);
   *
   *   const v2_user_me_download_quota = await v2.user.me.download.quota();
   *   console.log(v2_user_me_download_quota);
   * };
   * 
   * main();
   * ```
  */
  (): Promise<response>;
};

export interface response {
  quota_used: number;
}


const name: types = async () => {
  const data = await request(`me/download-quota-check`, {
    method: 'GET',
  });

  return data;
};


export default name;