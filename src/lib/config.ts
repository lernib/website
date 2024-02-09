import { dev } from '$app/environment'


export const DOMAIN = dev ? 'http://localhost:5173' : 'https://lernib.com'
export const API_DOMAIN = dev ? 'http://localhost:3001' : 'https://api.lernib.com'
export const COGNITO_BASE_URI = 'https://auth.lernib.com'
export const COGNITO_CLIENT_ID = '5gcpvrejmvp27lukikktdi021p'
export const COGNITO_USER_POOL_ID = 'us-east-1_YGpBl2H1U'
export const DOMAIN_SIGNOUT_URI = new URL('/auth?action=logout', DOMAIN).toString()

export function getSigninUrl() {
  const out = new URL('/oauth2/authorize', COGNITO_BASE_URI)
  out.search = new URLSearchParams({
    client_id: COGNITO_CLIENT_ID,
    response_type: 'code',
    scope: 'email+openid+phone',
    redirect_uri: new URL('/auth', DOMAIN).toString()
  }).toString()

  // URLSearchParams is stupid and replaces the pluses in the
  // scope with %2B :/
  return out.toString().replaceAll('%2B', '+')
}

export function getSignoutUrl(): string {
  const out = new URL("/logout", COGNITO_BASE_URI)
  out.search = new URLSearchParams({
    client_id: COGNITO_CLIENT_ID,
    logout_uri: DOMAIN_SIGNOUT_URI,
    redirect_uri: DOMAIN_SIGNOUT_URI,
    response_type: 'code'
  }).toString()

  return out.toString()
}

export function getRedirectUrl(): string {
	return new URL("/auth", DOMAIN).toString();
}

export const TIMEZONES = {
  "-5": "EST",
  "-6": "CST",
  "-7": "MST",
  "-8": "PST",
  "NA": "Unknown"
}
