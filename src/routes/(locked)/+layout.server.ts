import type { LayoutServerLoad } from "./$types";
import { getSigninUrl } from "$lib/config";
import { redirect } from "@sveltejs/kit";
import { accessTokenPayload } from "$lib/auth/helpers";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const accessToken = await accessTokenPayload(cookies.get('access_token'));

  if (accessToken) {
    const roles = accessToken['cognito:groups']

    if (roles?.includes('maintenance')) {
      return null;
    }
  }

  throw redirect(307, getSigninUrl())
}
