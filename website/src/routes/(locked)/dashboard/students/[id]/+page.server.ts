import type { PageServerLoad } from "./$types";
import type { ApiStudent } from "$lib/types";
import { API_DOMAIN } from "$lib/config";
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ params }) => {
  const student: ApiStudent = await fetch(new URL(`/student/${params.id}`, API_DOMAIN))
    .then((res) => res.json())
    
  if (student.id != params.id) {
    throw error(404, "Not Found")
  }

  return {
    student
  }
}
