import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class StudentsController {
  async index(_ctx: HttpContext) {
    return await Student.all()
  }

  async store({request}: HttpContext) {
    const student = new Student();
    student.name = request.input('name');
  }
}
