export interface Description {
  auth: number;
  title: string;
  method: string;
  description: string;
  imports?: string[];
  params: Param[];
  return?: string;
  notes?: object[];
}

export interface Param {
  type?: string;
  name: string;
  options?: boolean;
  optional?: boolean;
  description?: string;
  params?: Param[];
};

export type osu_mode = 'osu' | 'fruits' | 'mania' | 'taiko';

export type auth_scopes = ['chat.write' | 'delegate' | 'forum.write' | 'friends.read' | 'identify' | 'public'];