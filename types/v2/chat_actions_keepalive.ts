export interface ChatActionsKeepaliveResponse {
  silences: Silence[]
}

export interface Silence {
  id: number
  user_id: number
}
