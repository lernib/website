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

	Request: {

		Body: z.void()

	},

	Response: {

		Body: Db.Students.Item

	}

};

export const Calendar = {

	Request: {

		Body: z.void()

	},

	Response: {

		Body: Db.Calendar.Item.array()

	}

};
