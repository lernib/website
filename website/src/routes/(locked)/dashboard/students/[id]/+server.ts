import type { RequestHandler } from "./$types";
import { handleAuthCookiesA } from "$lib/auth";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";
import * as tst from '@lernib/ts-types';

const PatchReqZ = tst.Api.Student.Patch.Request.Body;
export const PATCH: RequestHandler = async ({ request, params, cookies }) => {
  const access_token = await handleAuthCookiesA(cookies);

  if (access_token?.["cognito:groups"]?.includes('maintenance')) {
    const body = PatchReqZ.parse(await request.json());

    const response = await fetch(new URL(`/student/${params.id}`, API_DOMAIN), {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })

    return response;
  }

  throw error(403);
}

export const DELETE: RequestHandler = async ({ params, cookies }) => {
  const access_token = await handleAuthCookiesA(cookies);

  if (access_token?.["cognito:groups"]?.includes('maintenance')) {
    const response = await fetch(new URL(`/student/${params.id}`, API_DOMAIN), {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })

    return response;
  }

  throw error(403);
}
