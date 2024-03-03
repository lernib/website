import { Router } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES } from '$services/db';
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

const GET = new Endpoint<GetEndpoint>('GET', '/events')
	.executor(getHandler);

export default function inject(router: Router) {
	GET.build(router);
}
