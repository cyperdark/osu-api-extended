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
  hits: TotalObjectsHits
};

export type ConvertHitsResponse = {
  hits: TotalObjectsHits
  fc: TotalObjectsHits
};

export interface TotalObjectsHits {
  geki: number;
  300: number;
  katu: number;
  100: number;
  50: number;
  0: number;
};