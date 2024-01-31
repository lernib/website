import { writable } from 'svelte/store'


interface AuthStore {
  at_hash: string,
  aud: string,
  auth_time: number,
  "cognito:username": string,
  email: string,
  email_verified: boolean,
  event_id: string,
  exp: number,
  iat: number,
  iss: string,
  jti: string,
  origin_jti: string,
  sub: string,
  token_use: string
}

export const authStore = writable<AuthStore | null>();
