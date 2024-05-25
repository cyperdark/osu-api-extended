import { IError } from "../../types";
import { AssetsDatafilesResponse } from "../../types/v2/assets_datafiles";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type Response = AssetsDatafilesResponse & IError;


export const assets_dataFiles = async (): Promise<Response> => {
  const data = await request(`https://data.ppy.sh/`, {
    method: 'GET',
  });

  if (data.error) return handleErrors(data.error) as Response;


  const array = data.split('\n')
    .filter((r: string) => r.includes(`<a href='`))
    .map((r: string) => {
      const match = r.match(/href='([^']+)'/);
      return match ? `https://data.ppy.sh/${match[1]}` : null;
    })
    .filter((r: string) => r != null);


  return { files: array } as Response;
};