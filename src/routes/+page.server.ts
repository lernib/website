import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { DOMAIN } from "$lib/config";
import { verifyTokens } from "$lib/auth/helpers";


export const load: PageServerLoad = async ({ cookies }) => {
  const id_token = cookies.get('id_token');
  const access_token = cookies.get('access_token');

  if (id_token && await verifyTokens(access_token!)) {
    throw redirect(307, new URL('/dashboard', DOMAIN));
  }
}
