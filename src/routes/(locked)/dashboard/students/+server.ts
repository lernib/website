import type { RequestHandler } from "./$types";
import { verifyTokens } from "$lib/auth/helpers";
import { error } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ request, cookies }) => {
  const access_token = cookies.get('access_token');
  
  if (access_token && await verifyTokens(access_token)) {
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
