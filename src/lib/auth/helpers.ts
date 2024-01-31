import * as config from '$lib/config'
import * as secrets from '$lib/secrets'

interface Tokens {
	access_token: string;
	id_token: string;
	token_type: "Bearer";
	expires_in: number;
	refresh_token?: string;
}

interface TokenPayload {
    // Are we passing an auth code or a refresh token
	grant_type: "authorization_code" | "refresh_token";
	client_id: string;
	client_secret: string;
	redirect_uri: string;
	code?: string;
	refresh_token?: string;
}

interface TokenOptionsCode {
	code: string;
	refreshToken?: never;
}

interface TokenOptionsRefresh {
	code?: never;
	refreshToken: string;
}

type TokenOptions = TokenOptionsCode | TokenOptionsRefresh;

/**
 * This function can either generate tokens from a code or from a refresh token.
 * If a code is provided, this all tokens is generated (requires a fresh login)
 * If a refresh token is provided, only the access/id token is updated.
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html
 */
export async function getTokens(options: TokenOptions) {
	const baseUrl = config.COGNITO_BASE_URI;
	const clientId = config.COGNITO_CLIENT_ID;
	const clientSecret = secrets.COGNITO_CLIENT_SECRET;

	// Generate the Authorization header value (basic auth) using the client ID and secret.
	const authHeader = btoa(`${clientId}:${clientSecret}`);

	// The token api endpoint.
	const url = new URL("/oauth2/token/", baseUrl);

	// BodyObject
	const bodyObj: TokenPayload = {
		// If a code is passed, use the authorization_code grant type.
		// If a refresh token is passed, use the refresh_token grant type.
		grant_type: options.code ? "authorization_code" : "refresh_token",
		client_id: clientId,
		client_secret: clientSecret,
		redirect_uri: config.getRedirectUrl()
	};

	// Add the code or refresh token to the body object depending on the options.
	if (options.code) bodyObj.code = options.code;
	if (options.refreshToken) bodyObj.refresh_token = options.refreshToken;

	// Serialize the body object to a string.
	const body: string = Object.entries(bodyObj)
		.map(([k, v]) => `${k}=${v}`)
		.join("&");

	// Make the request and return the response.
	const response = await fetch(url.toString(), {
		method: "POST",
		headers: {
			// The headers as defined in the Cognito docs.
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${authHeader}`
		},
		body
	});

	return (await response.json()) as Tokens;
}
