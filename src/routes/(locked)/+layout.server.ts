import type { LayoutServerLoad } from "./$types";
import { getSigninUrl } from "$lib/config";
import { redirect } from "@sveltejs/kit";
import { verifyTokens } from "$lib/auth/helpers";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const id_token = cookies.get('id_token');
  const access_token = cookies.get('access_token');

  if (id_token && await verifyTokens(access_token!)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const userdata = JSON.parse(atob(id_token.split('.')[1]!))

    return {
      userdata
    }
  }

  throw redirect(307, getSigninUrl())
}
