import type { LayoutServerLoad } from "./$types";
import { idTokenPayload } from "$lib/auth/helpers";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const idToken = await idTokenPayload(cookies.get('id_token'));

  if (idToken) {
    return {
      ident: idToken
    }
  }

  return {
    ident: null
  }
}
