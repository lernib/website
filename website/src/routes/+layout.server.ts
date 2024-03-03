import type { LayoutServerLoad } from "./$types";
import { handleAuthCookiesI } from "$lib/auth";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const idToken = await handleAuthCookiesI(cookies);

  if (idToken) {
    return {
      ident: idToken
    }
  }

  return {
    ident: null
  }
}
