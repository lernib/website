import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { StudentTable } from '$services/db';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

import studentInjector from './Student';

const GetZ = tst.Api.Students.Response.Body;
type GetEndpoint = z.infer<typeof GetZ>;
async function getHandler(): Promise<GetEndpoint> {
	const data = await StudentTable.getAll();

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

	await StudentTable.insert(
		body.student_name.replace(' ', '.').toLowerCase(),
		body
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
