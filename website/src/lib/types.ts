export interface ApiStudentContact {
  name: string,
  phone: string | null,
  email: string | null
}

export interface ApiStudent {
  userid: string,
  student_name: string,
  client_name: string,
  timezone: "-5" | "-6" | "-7" | "-8" | "NA",
  contacts: ApiStudentContact[]
}

export interface Notify {
  message: string;
  color: string;
}
