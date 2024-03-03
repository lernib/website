import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES, updateCommander } from '$services/db';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

const GetZ = tst.Api.Student.Response.Body;
type GetEndpoint = z.infer<typeof GetZ>;
async function getHandler(req: Request): Promise<GetEndpoint> {
	const data = await dynamo.send(
		new GetCommand({
			TableName: TABLES.students,
			Key: {
				userid: req.params.userid
			}
		})
	).then(res => res.Item);

	if (!data) {
		throw new ErrorStatus(404, 'Student does not exist');
	}

	return GetZ.parse(data);
}

const PatchZ = tst.Api.Student.Patch.Response.Body;
const PatchReqZ = tst.Api.Student.Patch.Request.Body;
type PatchEndpoint = z.infer<typeof PatchZ>;
async function patchHandler(req: Request): Promise<PatchEndpoint> {
	const contents = PatchReqZ.parse(req.body);

	const {
		command,
		values,
		keys
	} = updateCommander(contents);

	await dynamo.send(
		new UpdateCommand({
			TableName: TABLES.students,
			Key: {
				userid: req.params.userid
			},
			UpdateExpression: command,
			ExpressionAttributeValues: values,
			ExpressionAttributeNames: keys,
			ReturnValues: 'ALL_NEW'
		})
	);
}

const GET = new Endpoint<GetEndpoint>('GET', '/student/:userid')
	.executor(getHandler);

const PATCH = new Endpoint<PatchEndpoint>('PATCH', '/student/:userid')
	.executor(patchHandler);

export default function inject(router: Router) {
	GET.build(router);
	PATCH.build(router);
}
