import type { LayoutServerLoad } from "./$types";
import { getSigninUrl } from "$lib/config";
import { redirect } from "@sveltejs/kit";
import { handleAuthCookiesA } from "$lib/auth";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const accessToken = await handleAuthCookiesA(cookies);

  if (accessToken) {
    const roles = accessToken['cognito:groups']

    if (roles?.includes('maintenance')) {
      return null;
    }
  }

  throw redirect(307, getSigninUrl())
}
