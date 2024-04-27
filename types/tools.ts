export interface ModsResponse {
  number: number;
  name: string;
};

export interface CountryResponse {
  code: string;
  name: string;
};

export interface AccuracyResponse {
  accuracy: number;
  fc_accuracy: number;
};

export interface RankResponse {
  rank: string;
};

export type TotalObjectsResponse = {
  amount: number;
  mode: string;
};