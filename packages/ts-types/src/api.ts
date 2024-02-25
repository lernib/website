import * as z from 'zod';

export const Contact = {

	Request: {

		Body: z.object({
			name: z.string(),
			email: z.string().email(),
			content: z.string()
		})

	},

	Response: {

		Body: z.void()

	}

};
