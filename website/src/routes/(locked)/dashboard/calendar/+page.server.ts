import type { PageServerLoad } from './$types'
import { API_DOMAIN } from '$lib/config'

export const load: PageServerLoad = async () => {
  const events = await fetch(new URL('/events', API_DOMAIN))
    .then(res => res.json());
  
  return {
    events
  }
}
