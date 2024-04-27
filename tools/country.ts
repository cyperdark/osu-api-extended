import { IError } from "../types";
import { CountryCodes, CountryNames } from "../types/enums";
import { CountryResponse } from "../types/tools";


type Response = CountryResponse & IError;


export const country_details = (name: string): Response => {
  if (name == null || name == '') {
    return { error: new Error('Specify country code or country name') } as Response;
  };


  if (name.length == 2) {
    const find = (CountryNames as any)[name.toUpperCase()];
    if (find == null) {
      return { error: new Error('Country not found') } as Response;
    };


    return {
      code: name.toUpperCase(),
      name: find,
    } as Response;
  };


  const find = (CountryCodes as any)[name];
  if (find == null) {
    return { error: new Error('Country not found') } as Response;
  };


  return {
    code: name,
    name: find,
  } as Response;
};