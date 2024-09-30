import { settings } from '../utility/auth';


export const handleErrors = (message: string | Error): any => {
  const error = message instanceof Error ? message : new Error(message);
  if (settings.throwErrors) {
    throw error;
  };


  return { error };
};