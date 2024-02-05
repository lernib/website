import type { RequestHandler } from "./$types";
import { accessTokenPayload } from "$lib/auth/helpers";
import { error } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ request, params, cookies }) => {
  const access_token = await accessTokenPayload(cookies.get('access_token'));

  if (access_token?.["cognito:groups"]?.includes('maintenance')) {
    const {
      student_name,
      client_name,
      timezone
    } = await request.json();

    const response = await fetch(`https://api.lernib.com/dev/students/${params.userid}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        student_name,
        client_name,
        timezone
      })
    })

    return response;
  }

  throw error(403);
}
