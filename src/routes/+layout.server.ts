import type { LayoutServerLoad } from "./$types";

export const prerender = false;

export const load: LayoutServerLoad = async ({ cookies }) => {
  const id_token = cookies.get('id_token');

  if (id_token) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    const userdata = JSON.parse(atob(id_token.split('.')[1]!))

    return {
      userdata
    }
  }

  return {
    userdata: null
  }
}
