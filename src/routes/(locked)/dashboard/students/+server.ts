import type { RequestHandler } from "./$types";
import { accessTokenPayload } from "$lib/auth/helpers";
import { error } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ request, cookies }) => {
  const access_token = await accessTokenPayload(cookies.get('access_token'));

  if (access_token?.["cognito:groups"]?.includes('maintenance')) {
    const response = await fetch('https://api.lernib.com/dev/students', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: await request.text()
    });

    return response;
  }

  return error(403);
}
