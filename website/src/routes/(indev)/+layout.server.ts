import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { dev } from "$app/environment";

export const prerender = false;

export const load: LayoutServerLoad = async () => {
  if (!dev) {
    return redirect(307, '/');
  }
}
