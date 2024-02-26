import { BaseSchema } from '@adonisjs/lucid/schema'
import { EventFactory } from '#database/factories/event_factory'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.timestamp('start').notNullable()
      table.timestamp('end').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
