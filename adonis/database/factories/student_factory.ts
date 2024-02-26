import factory from '@adonisjs/lucid/factories'
import Student from '#models/student'

export const StudentFactory = factory
  .define(Student, async ({ faker }) => {
    return {}
  })
  .build()