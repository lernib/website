import type { RequestHandler } from "./$types";
import { accessTokenPayload } from "$lib/auth/helpers";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ request, params, cookies }) => {
  const access_token = await accessTokenPayload(cookies.get('access_token'));

  if (access_token?.["cognito:groups"]?.includes('maintenance')) {
    const {
      studentName,
      clientName,
      timezone
    } = await request.json();

    const response = await fetch(new URL(`/student/${params.id}`, API_DOMAIN), {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentName,
        clientName,
        timezone
      })
    })

    return response;
  }

  throw error(403);
}
