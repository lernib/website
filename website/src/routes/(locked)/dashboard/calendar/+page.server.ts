import type { PageServerLoad } from './$types'
import { API_DOMAIN } from '$lib/config'
import * as tst from '@lernib/ts-types'

const CallResponse = tst.Api.Calendar.Response.Body;

export const load: PageServerLoad = async () => {
  const events = CallResponse.parse(
    await fetch(new URL('/events', API_DOMAIN))
      .then(res => res.json())
  );

  return {
    events
  }
}
