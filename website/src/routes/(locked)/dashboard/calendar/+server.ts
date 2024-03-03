import type { RequestHandler } from "./$types";
import { handleAuthCookiesA } from "$lib/auth";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";
import * as tst from '@lernib/ts-types';

const PostBody = tst.Api.Calendar.Post.Request.Body;

export const POST: RequestHandler = async ({ request, cookies }) => {
  const access_token = await handleAuthCookiesA(cookies);

  if (access_token?.["cognito:groups"]?.includes('maintenance')) {
    const body = PostBody.parse(JSON.parse(await request.text()));

    const response = await fetch(new URL("/event", API_DOMAIN), {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return response;
  }

  return error(403);
}
