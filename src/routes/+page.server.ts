import { verifyTokens } from '$lib/auth/helpers';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types'


export const load: PageServerLoad = async ({ cookies }) => {
  const access_token = cookies.get('access_token');

  if (access_token && await verifyTokens(access_token)) {
    const id_token = cookies.get('id_token');

    if (!id_token) return {}

    const roles: string[] = JSON.parse(atob(id_token.split('.')[1]))['cognito:groups']

    if (!roles) return {}

    if (roles.includes('maintenance')) {
      redirect(307, '/dashboard')
    }
  }

  return {}
}
