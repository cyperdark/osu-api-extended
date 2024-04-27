import { IDefaultParams, IError } from "../../types";
import { BeatmapsetBackground, SeasonalBackgrounds } from "../../types/v2/assets_backgrounds";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";


type params = ({
  type: 'seasonal';
} | {
  type: 'beatmapset',
  set_id: number;
});

type Response<T extends params['type']> =
  T extends 'seasonal'
  ? Promise<SeasonalBackgrounds & IError>
  : T extends 'beatmapset'
  ? BeatmapsetBackground & IError
  : IError;


export const assets_backgrounds = <T extends params>(params: T, addons?: IDefaultParams): Response<T['type']> => {
  if (params.type == 'seasonal') {
    return request(`https://osu.ppy.sh/api/v2/seasonal-backgrounds`, {
      method: 'GET',
      addons,
    }) as Response<T['type']>;
  };


  if (params.type == 'beatmapset') {
    if (params.set_id == null) {
      return handleErrors('Specify beatmapset id') as Response<T['type']>;
    };


    return {
      cover: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/cover.jpg`,
      "cover@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/cover@2x.jpg`,
      card: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/card.jpg`,
      "card@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/card@2x.jpg`,
      list: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/list.jpg`,
      "list@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/list@2x.jpg`,
      slimcover: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/slimcover.jpg`,
      "slimcover@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/slimcover@2x.jpg`,
      raw: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/raw.jpg`,
      fullsize: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/fullsize.jpg`,
    } as Response<T['type']>;
  };


  return handleErrors(`Unsupported type: ${(params as any).type}`) as Response<T['type']>;
};