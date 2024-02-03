import type { PageServerLoad } from "./$types";
import type { ApiStudent } from "$lib/types";

export const load: PageServerLoad = async () => {
  let students: [ApiStudent] = await fetch("https://api.lernib.com/dev/students")
    .then((res) => res.json())
  
  students = students.sort((a, b) => {
    const [fa, la] = a.student_name.split(' ')
    const [fb, lb] = b.student_name.split(' ')

    if (la == lb) return fa.localeCompare(fb)
    return la.localeCompare(lb)
  })

  return {
    students
  }
}
