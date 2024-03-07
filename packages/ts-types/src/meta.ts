import * as z from 'zod';

export const Regex = {

	FirstLastName: /\w+ \w+/

};

export const Timezone = z.enum([
	'-5', // EST
	'-6', // CST
	'-7', // MST
	'-8', // PST
	'NA'  // Unknown
]);
