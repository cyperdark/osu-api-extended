import { settings } from '../utility/auth';


export const handleErrors = (message: string): any => {
  if (settings.throwErrors) {
    throw new Error(message);
  };


  return { error: new Error(message) };
};