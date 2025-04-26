export const callbacks: {
  /**
   * just a hook to call a function after request made 
   */
  on_request?: (url: string) => Promise<void>;
} = {};