import { IError } from "..";

export type BeatmapsDownloadResponse = {
  status: string,
  destination?: string,
  /**
   * Time in milliseconds
   */
  elapsed_time?: number
} & IError;