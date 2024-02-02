import type { PageServerLoad } from "./$types";
import type { ApiStudent } from "$lib/types";
import { error } from "@sveltejs/kit";


export const load: PageServerLoad = async ({ params }) => {
  const student: ApiStudent = await fetch(`https://api.lernib.com/dev/students/${params.userid}`)
    .then((res) => res.json())
    
  if (student.userid != params.userid) {
    throw error(404, "Not Found")
  }

  return {
    student
  }
}
