import { Router, Request } from 'express';
import { Endpoint } from '#engine';
import emailClient from '$services/email';
import { SendEmailCommand } from '@aws-sdk/client-ses';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

const PostZ = tst.Api.Contact.Response.Body;
const PostReqZ = tst.Api.Contact.Request.Body;
type PostEndpoint = z.infer<typeof PostZ>;
async function postHandler(req: Request): Promise<PostEndpoint> {
	const body = PostReqZ.parse(req.body);

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
}

const POST = new Endpoint<PostEndpoint>('POST', '/contact')
	.executor(postHandler);

export default function inject(router: Router) {
	POST.build(router);
}
