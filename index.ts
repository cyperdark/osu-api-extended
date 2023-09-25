import download_file from './tools/download_file';
import accuracy from './tools/accuracy';


export const tools = {
  accuracy: accuracy,
  download: {
    difficulty: download_file
  },
};

export * as country from './tools/country';
export * as mods from './tools/mods';

export * as auth from './utility/auth';


export * as v2 from "./api/v2/index";