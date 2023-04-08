export interface Description {
  auth: number;
  title: string;
  method: string;
  description: string;
  params: Param[];
  return?: string;
}

export interface Param {
  type?: string;
  name: string;
  optional?: boolean;
  description?: string;
  params?: Param[];
};