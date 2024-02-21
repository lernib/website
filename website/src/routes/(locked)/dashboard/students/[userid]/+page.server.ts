import type { PageServerLoad } from "./$types";
import type { ApiStudent } from "$lib/types";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ params }) => {
  const student: ApiStudent = await fetch(new URL(`/students/${params.userid}`, API_DOMAIN))
    .then((res) => res.json())
    
  if (student.userid != params.userid) {
    throw error(404, "Not Found")
  }

  return {
    student
  }
}
