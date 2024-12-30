import { IDefaultParams, IError } from "../../types";
import { MatchesDetailsResponse } from "../../types/v2/matches_detaIls";
import { handleErrors } from "../../utility/handleErrors";
import { request } from "../../utility/request";

type Response = MatchesDetailsResponse & IError;

export const matches_details = async (
  params: { match_id: number; before?: number; after?: number; limit?: number },
  addons?: IDefaultParams
): Promise<Response> => {
  if (params?.match_id == null) {
    return handleErrors(new Error("Specify match id")) as Response;
  }

  if (params?.limit < 1 || params?.limit > 101) {
    return handleErrors(new Error("Limit must be between 1 and 101")) as Response;
  }

  const data = await request(`https://osu.ppy.sh/api/v2/matches/${params.match_id}`, {
    method: "GET",
    params: {
      before: params.before,
      after: params.after,
      limit: params.limit,
    },
    addons,
  });

  if (data.error) return handleErrors(new Error(data.error));

  return data;
};
