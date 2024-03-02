import type { RequestHandler } from "./$types";
import { accessTokenPayload } from "$lib/auth/helpers";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";
import * as tst from '@lernib/ts-types';

const PostBody = tst.Api.Calendar.Post.Request.Body;

export const POST: RequestHandler = async ({ request, cookies }) => {
  const access_token = await accessTokenPayload(cookies.get('access_token'));

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
