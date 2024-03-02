import * as z from 'zod';
import * as Db from './db';

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

export const Students = {

	Request: {

		Body: z.void()

	},

	Response: {

		Body: Db.Students.Item.array()

	}

};

export const Student = {

	Post: {

		Request: {

			Body: Db.Students.Item.omit({ id: true })

		}

	},

	Request: {

		Body: z.void()

	},

	Response: {

		Body: Db.Students.Item

	}

};

export const Calendar = {

	Post: {

		Request: {

			Body: Db.Calendar.Item.omit({ id: true })

		}

	},

	Request: {

		Body: z.void()

	},

	Response: {

		Body: Db.Calendar.Item.array()

	}

};
