import * as z from 'zod';
import { Regex, Timezone } from './meta';

export const Students = {

	Item: z.object({
		id: z.number(),
		clientName: z.string().regex(Regex.FirstLastName),
		studentName: z.string().regex(Regex.FirstLastName),
		timezone: Timezone
	})

};

export const Calendar = {

	Item: z.object({
		id: z.number(),
		start: z.string().datetime({ offset: true }),
		end: z.string().datetime({ offset: true })
	})

};
