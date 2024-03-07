import { handleAuthCookiesI } from '$lib/auth';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types'


export const load: LayoutServerLoad = async ({ cookies }) => {
  const idToken = await handleAuthCookiesI(cookies);

  if (idToken) {
    const roles = idToken['cognito:groups']

    if (roles?.includes('maintenance')) {
      return {}
    }
  }

  redirect(307, '/dashboard')
}
