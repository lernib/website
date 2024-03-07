import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES } from '$services/db';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

import studentInjector from './Student';

const GetZ = tst.Api.Students.Response.Body;
type GetEndpoint = z.infer<typeof GetZ>;
async function getHandler(): Promise<GetEndpoint> {
	const data = await dynamo.send(
		new ScanCommand({
			TableName: TABLES.students
		})
	).then(res => res.Items);

	if (!data) {
		throw new ErrorStatus(500, 'No data exists');
	}

	return GetZ.parse(data);
}

const PostZ = tst.Api.Student.Post.Response.Body;
const PostReqZ = tst.Api.Student.Post.Request.Body;
type PostEndpoint = z.infer<typeof PostZ>;
async function postHandler(req: Request): Promise<PostEndpoint> {
	const body = PostReqZ.parse(req.body);
	const contents = {
		...body,
		userid: body.student_name.replace(' ', '.').toLowerCase()
	};

	await dynamo.send(
		new PutCommand({
			TableName: TABLES.students,
			Item: contents
		})
	);
}

const GET = new Endpoint<GetEndpoint>('GET', '/students')
	.executor(getHandler);

const POST = new Endpoint<PostEndpoint>('POST', '/student')
	.executor(postHandler);

export default function inject(router: Router) {
	GET.build(router);
	POST.build(router);

	studentInjector(router);
}
