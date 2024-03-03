import type { RequestHandler } from "./$types";
import { handleAuthCookiesA } from "$lib/auth";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ request, params, cookies }) => {
  const access_token = await handleAuthCookiesA(cookies);

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
