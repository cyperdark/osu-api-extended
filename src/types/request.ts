export interface RequestParams {
  method?: string,
  headers?: { [key: string]: string },
  data?: string,
  params?: object | [object, ...object[]] // any | [any, ...any]
};

export interface RequestNamepsace {
  (url: string, params: { method: string, data?: string, headers?: { [key: string]: string }, params?: object }): Promise<any>
};