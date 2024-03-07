import type { PageServerLoad } from "./$types";
import { API_DOMAIN } from "$lib/config";
import * as tst from '@lernib/ts-types';

const CallResponse = tst.Api.Students.Response.Body;

export const load: PageServerLoad = async () => {
  let students = CallResponse.parse(
    await fetch(new URL("/students", API_DOMAIN))
      .then((res) => res.json())
  )

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
