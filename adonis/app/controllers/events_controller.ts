import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'

export default class EventsController {
  async index(_ctx: HttpContext) {
    return await Event.all()
  }

  async store({ request }: HttpContext) {
    const modifiers = request.only(['start', 'end'])

    const event = new Event()
    await event.merge(modifiers).save()
  }

  async show({ request }: HttpContext) {
    return await Event.findOrFail(request.param('id'))
  }

  async destroy({ request }: HttpContext) {
    const event = await Event.findOrFail(request.param('id'))
    await event.delete()
  }

  async update({ request }: HttpContext) {
    const modifiers = request.only(['start', 'end'])

    const event = await Event.findOrFail(request.param('id'))
    await event.merge(modifiers).save()
  }
}
