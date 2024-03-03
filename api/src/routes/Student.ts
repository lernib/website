import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES } from '$services/db';
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

	const keys = Object.keys(contents);

	const updateCommand = Object.entries(contents).reduce((acc, [key]) => {
		let next = `#${String.fromCharCode(keys.indexOf(key) + 'A'.charCodeAt(0))} = :${key.toLowerCase()}`;

		if (acc != 'SET ') {
			next = `, ${next}`;
		}

		return `${acc}${next}`;
	}, 'SET ');

	const expressionValues = Object.entries(contents).reduce((acc: Record<string, any>, [key, value]) => {
		acc[`:${key.toLowerCase()}`] = value;
		return acc;
	}, {});

	const expressionKeys = keys.reduce((acc: any, key, idx) => {
		acc[`#${
			String.fromCharCode(idx + 'A'.charCodeAt(0))
		}`] = key;
		return acc;
	}, {});

	await dynamo.send(
		new UpdateCommand({
			TableName: TABLES.students,
			Key: {
				userid: req.params.userid
			},
			UpdateExpression: updateCommand,
			ExpressionAttributeValues: expressionValues,
			ExpressionAttributeNames: expressionKeys,
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
