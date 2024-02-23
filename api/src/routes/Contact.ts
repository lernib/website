import { Router } from 'express';
import emailClient from '$services/email';
import * as z from 'zod';
import { SendEmailCommand } from '@aws-sdk/client-ses';

const router = Router();

const routerPostBody = z.object({
	name: z.string(),
	email: z.string().email(),
	content: z.string()
});

router.post('/', async (req, res) => {
	let body;

	try {
		body = routerPostBody.parse(req.body);
	} catch {
		res.status(400).send();
		return;
	}

	const message = `You got a new message!

Name: ${body.name}
Email: ${body.email}

${body.content}`;

	await emailClient.send(
		new SendEmailCommand({
			Source: `Contact - ${body.name} <contact-no-reply@lernib.com>`,
			Destination: {
				ToAddresses: ['ckieliszewski@lernib.com']
			},
			Message: {
				Body: {
					Text: {
						Data: message
					}
				},
				Subject: {
					Data: 'Great news - someone is interested!'
				}
			}
		})
	).catch((e) => console.log(e));

	return res.status(200).send();
});

export default router;
