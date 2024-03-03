import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { ScanCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES, updateCommander } from '$services/db';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

const GetZ = tst.Api.Events.Response.Body;
type GetEndpoint = z.infer<typeof GetZ>;
async function getHandler(): Promise<GetEndpoint> {
	const data = await dynamo.send(
		new ScanCommand({
			TableName: TABLES.calendar
		})
	).then(res => res.Items);

	if (!data) {
		throw new ErrorStatus(500, 'Could not get events');
	}

	return GetZ.parse(data);
}

const PostZ = tst.Api.Events.Post.Response.Body;
const PostReqZ = tst.Api.Events.Post.Request.Body;
type PostEndpoint = z.infer<typeof PostZ>;
async function postHandler(req: Request): Promise<PostEndpoint> {
	const body = PostReqZ.parse(req.body);
	const eventid = crypto.randomUUID();

	const {
		command,
		keys,
		values
	} = updateCommander(body);

	await dynamo.send(
		new UpdateCommand({
			TableName: TABLES.calendar,
			Key: {
				eventid
			},
			UpdateExpression: command,
			ExpressionAttributeValues: values,
			ExpressionAttributeNames: keys,
			ReturnValues: 'ALL_NEW'
		})
	);
}

const GET = new Endpoint<GetEndpoint>('GET', '/events')
	.executor(getHandler);

const POST = new Endpoint<PostEndpoint>('POST', '/event')
	.executor(postHandler);

export default function inject(router: Router) {
	GET.build(router);
	POST.build(router);
}
