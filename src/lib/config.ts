import { dev } from '$app/environment'


export const DOMAIN = dev ? 'http://localhost:5173' : 'https://lernib.com'
export const COGNITO_BASE_URI = 'https://auth.lernib.com'
export const COGNITO_CLIENT_ID = '5gcpvrejmvp27lukikktdi021p'
export const COGNITO_USER_POOL_ID = 'us-east-1_YGpBl2H1U'

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

/**
 * Make sure that the redirect URL is always the same as the one configured in Cognito.
 */
export function getRedirectUrl(): string {
	return new URL("/auth", DOMAIN).toString();
}
