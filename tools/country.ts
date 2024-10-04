import { IError } from "../types";
import { CountryCodes, CountryNames } from "../types/enums";
import { CountryResponse } from "../types/tools";
import { handleErrors } from "../utility/handleErrors";


type Response = CountryResponse & IError;

/**
 * Get country name and code by providing country name/code
 *
 * &nbsp;
 *
 * ### Parameters
 * - `name` - Name of the country or country code
 *
 * &nbsp;
 *
 * ### Usage Example
 * ```js
 * const { tools } = require('osu-api-extended');
 * 
 * function main() {
 *   try {
 *     const result = tools.country_details('US');
 *     // or
 *     const result = tools.country_details('United States');
 *     if (result.error != null) {
 *       console.log(result.error);
 *       return;
 *     };
 * 
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
export const country_details = (name: string): Response => {
  if (name == null || name == '') {
    return handleErrors(new Error('Specify country code or country name')) as Response;
  };


  if (name.length == 2) {
    const find = (CountryNames as any)[name.toUpperCase()];
    if (find == null) {
      return handleErrors(new Error('Country not found')) as Response;
    };


    return {
      code: name.toUpperCase(),
      name: find,
    } as Response;
  };


  const find = (CountryCodes as any)[name];
  if (find == null) {
    return handleErrors(new Error('Country not found')) as Response;
  };


  return {
    code: name,
    name: find,
  } as Response;
};