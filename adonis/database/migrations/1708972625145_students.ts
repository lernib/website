import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('student_name').notNullable()
      table.string('client_name').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
