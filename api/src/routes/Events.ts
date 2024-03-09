import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { CalendarTable } from '$services/db';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

const GetZ = tst.Api.Events.Response.Body;
type GetEndpoint = z.infer<typeof GetZ>;
async function getHandler(): Promise<GetEndpoint> {
	const data = await CalendarTable.getAll();

	if (!data) {
		throw new ErrorStatus(500, 'Could not get events');
	}

	return data.map((event) => ({
		students: [],
		...event
	}));
}

const PostZ = tst.Api.Events.Post.Response.Body;
const PostReqZ = tst.Api.Events.Post.Request.Body;
type PostEndpoint = z.infer<typeof PostZ>;
async function postHandler(req: Request): Promise<PostEndpoint> {
	const body = PostReqZ.parse(req.body);
	const eventid = crypto.randomUUID();

	await CalendarTable.insert(eventid, body);
}

const GET = new Endpoint<GetEndpoint>('GET', '/events')
	.executor(getHandler);

const POST = new Endpoint<PostEndpoint>('POST', '/event')
	.executor(postHandler);

export default function inject(router: Router) {
	GET.build(router);
	POST.build(router);
}
