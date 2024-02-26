import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { DateTime } from 'luxon'

export const EventFactory = factory
  .define(Event, async () => {
    const eventStart = DateTime.now()
      .set({ minute: 0 })
      .plus({ days: 1 })

    const event = new Event();
    event.start = eventStart;
    event.end = eventStart.plus({ hours: 1 });

    return event;
  })
  .build()
