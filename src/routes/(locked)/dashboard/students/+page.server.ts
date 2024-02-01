import type { PageServerLoad } from "./$types";
import type { ApiStudent } from "$lib/types";

export const load: PageServerLoad = async () => {
  const students: [ApiStudent] = await fetch("https://api.lernib.com/dev/students")
    .then((res) => res.json())

  return {
    students
  }
}
