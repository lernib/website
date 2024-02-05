import type { LayoutServerLoad } from "./$types";
import { idTokenPayload } from "$lib/auth/helpers";
import { getSigninUrl } from "$lib/config";
import { redirect } from "@sveltejs/kit";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const idToken = await idTokenPayload(cookies.get('id_token'));

  if (idToken) return {
    ident: idToken
  }

  redirect(307, getSigninUrl())
}
