import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class StudentsController {
  async index(_ctx: HttpContext) {
    return await Student.all()
  }

  async store({request}: HttpContext) {
    const modifiers = request.only(['student_name', 'client_name', 'timezone'])

    const student = new Student()
    await student.merge(modifiers).save()
  }

  async show({request}: HttpContext) {
    return await Student.findOrFail(request.param('id'))
  }

  async destroy({request}: HttpContext) {
    const student = await Student.findOrFail(request.param('id'))
    await student.delete()
  }

  async update({request}: HttpContext) {
    const modifiers = request.only(['student_name', 'client_name', 'timezone'])

    const student = await Student.findOrFail(request.param('id'))
    await student.merge(modifiers).save()
  }
}
