import { IDefaultParams, IError } from "../../types";
import { BeatmapsetBackground, SeasonalBackgrounds } from "../../types/v2/assets_backgrounds";
import { request } from "../../utility/request";


type params = ({
  type: 'seasonal';
} | {
  type: 'beatmapset',
  set_id: number;
});

type Response<T extends params['type']> =
  T extends 'seasonal'
  ? Promise<SeasonalBackgrounds>
  : T extends 'beatmapset'
  ? BeatmapsetBackground & IError
  : IError;


const name = <T extends params>(params: T, addons?: IDefaultParams): Response<T['type']> => {
  if (params.type == 'seasonal') {
    return request(`https://osu.ppy.sh/api/v2/seasonal-backgrounds`, {
      method: 'GET',
      addons,
    }) as Response<T['type']>;
  };


  if (params.type == 'beatmapset') {
    if (params.set_id == null) {
      return { error: new Error('Specify beatmapset id') } as any;
    };


    return {
      cover: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/cover.jpg?1707077934`,
      "cover@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/cover@2x.jpg?1707077934`,
      card: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/card.jpg?1707077934`,
      "card@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/card@2x.jpg?1707077934`,
      list: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/list.jpg?1707077934`,
      "list@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/list@2x.jpg?1707077934`,
      slimcover: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/slimcover.jpg?1707077934`,
      "slimcover@2x": `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/slimcover@2x.jpg?1707077934`,
      raw: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/raw.jpg`,
      fullsize: `https://assets.ppy.sh/beatmaps/${params.set_id}/covers/fullsize.jpg`,
    } as Response<T['type']>;
  };


  return { error: new Error(`Unsupported type: ${(params as any).type}`) } as Response<T['type']>;
};


export default name;