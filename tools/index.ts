import { handleErrors } from "../utility/handleErrors";

export { beatmaps_download as download_beatmaps } from "../api/v2/beatmaps_download";
export { calculate_accuracy } from "./accuracy";
export { calculate_mods } from "./mods";
export { country_details } from "./country";
export { calculate_rank } from "./rank";
export { calculate_total_passed_objects, calculate_hits } from "./objects";
export { calculate_net_pp } from "./net-pp";



export const calculate_pp = () => {
  return handleErrors('Use rosu-pp-js instead');
};

/**
 * Create link for `user`, `score`, `editor_timing` and others
 *
 * &nbsp;
 *
 * ### Parameters
 * - `params._direct?` - Return osu direct link for type `beatmap` and `beatmapset`
 * - `params.mode?` - Return legacy link for type `score`
 * - `params.type` - Type of the link
 * - `params.value` - Link url value, for example `beatmap id` or `user id`
 *
 * &nbsp;
 *
 * ### Usage Example
 * ```js
 * const { tools } = require('osu-api-extended');
 * 
 * function main() {
 *   try {
 *     const result = tools.build_url({ type: 'beatmap', value: 4397592 });
 * 
 *     console.log(result);
 *   } catch (error) {
 *     console.log(error);
 *   };
 * };
 * 
 * main();
 * ```
 */
export const build_url = (params: {
  _direct?: boolean;
  mode?: 'osu' | 'fruits' | 'mania' | 'taiko';

  type: 'beatmap' | 'beatmapset' | 'editor_timing' | 'news' | 'match' | 'avatar' | 'user' | 'badge' | 'score';
  value: any;
}) => {
  const { _direct, type, mode, value } = params || {};

  switch (type) {
    case 'beatmap':
      return _direct == true ? `osu://b/${value}` : `https://osu.ppy.sh/b/${value}`;

    case 'beatmapset':
      return _direct == true ? `osu://s/${value}` : `https://osu.ppy.sh/s/${value}`;


    case 'news':
      return `https://osu.ppy.sh/home/news/${value}`;


    case 'editor_timing':
      return `osu://edit/${value}`;


    case 'match':
      return `https://osu.ppy.sh/community/matches/${value}`;


    case 'avatar':
      return `https://a.ppy.sh/${value}`;

    case 'user':
      return `https://osu.ppy.sh/users/${value}`;


    case 'badge':
      return `https://assets.ppy.sh/profile-badges/${value}`;


    case 'score':
      return `https://osu.ppy.sh/scores/${mode ? "/" + mode : ''}${value}`;


    default:
      return `Unsupported type: ${params?.type}`;
  };
};










// const postDataArray = (field_name: string, array: any[]) => {
//   const data = array.map((data, index) => {
//     return postDataObject(`${field_name}[${index}]`, data);
//   }).join('&');


//   return data;
// };

// const postDataObject = (field_name: string, object: object) => {
//   return Object.entries(object).map(([key, value]) => {
//     if (field_name == '')
//       return `${key}=${encodeURIComponent(value as any)}`;

//     return `${field_name}[${key}]=${encodeURIComponent(value as any)}`;
//   }).join('&');
// };