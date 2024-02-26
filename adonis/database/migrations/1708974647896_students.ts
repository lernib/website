import { BaseSchema } from '@adonisjs/lucid/schema'
import { Timezone } from '#types/enum'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enum('timezone', Object.values(Timezone)).defaultTo(Timezone.UNKNOWN).notNullable()
    })
  }
}
