import { settings } from '../utility/auth';


export const handleErrors = (error: Error): any => {
  if (settings.throwErrors) {
    throw error;
  };


  return { error };
};