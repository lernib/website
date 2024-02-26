import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class StudentsController {
  async index(_ctx: HttpContext) {
    return await Student.all()
  }

  async store({request}: HttpContext) {
    const student = new Student()
    student.student_name = request.input('student_name')
    student.client_name = request.input('client_name')
    await student.save()
  }

  async show({request}: HttpContext) {
    return await Student.findOrFail(request.param('id'))
  }

  async destroy({request}: HttpContext) {
    const student = await Student.findOrFail(request.param('id'))
    await student.delete()
  }
}
