import type { PageServerLoad } from "./$types";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";
import * as tst from '@lernib/ts-types';

const CallResponse = tst.Api.Student.Response.Body;

export const load: PageServerLoad = async ({ params }) => {
  const student = CallResponse.parse(
    await fetch(new URL(`/student/${params.id}`, API_DOMAIN))
      .then((res) => res.json())
  );
    
  if (student.id != params.id) {
    throw error(404, "Not Found")
  }

  return {
    student
  }
}
