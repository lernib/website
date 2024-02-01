import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async ({ request, params }) => {
  const {
    student_name,
    client_name,
    timezone
  } = await request.json();

  const response = await fetch(`https://api.lernib.com/dev/students/${params.userid}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      student_name,
      client_name,
      timezone
    })
  })

  return response;

  // return new Response(null, {
  //   status: response.status
  // })
}
