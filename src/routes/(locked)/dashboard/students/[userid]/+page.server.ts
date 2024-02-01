import type { PageServerLoad } from "./$types";
import type { ApiStudent } from "$lib/types";

export const load: PageServerLoad = async ({ params }) => {
  const student: ApiStudent = await fetch(`https://api.lernib.com/dev/students/${params.userid}`)
    .then((res) => res.json())

  return {
    student
  }
}
