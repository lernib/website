import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { EventFactory } from '#database/factories/event_factory'

export default class extends BaseSeeder {
  async run() {
    await EventFactory.create()
  }
}
