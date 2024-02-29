import * as z from 'zod';

export const Regex = {

	FirstLastName: /\w+ \w+/

};

export const Timezone = z.enum([
	'nfive', // EST
	'nsix', // CST
	'nseven', // MST
	'neight', // PST
	'na'  // Unknown
]);
