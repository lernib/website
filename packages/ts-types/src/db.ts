import * as z from 'zod';
import { Regex, Timezone } from './meta';

export const Students = {

	Item: z.object({
		userid: z.string().regex(/[a-z]+\.[a-z]+/),
		client_name: z.string().regex(Regex.FirstLastName),
		student_name: z.string().regex(Regex.FirstLastName),
		timezone: Timezone
	})

};
