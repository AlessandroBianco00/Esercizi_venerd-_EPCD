import { iUser } from "./user";

export interface iAuthResponse {
  user:iUser,
  accessToken: string
}
