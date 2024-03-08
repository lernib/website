import { Router, Request } from 'express';
import { Endpoint, ErrorStatus } from '#engine';
import { StudentTable } from '$services/db';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

const GetZ = tst.Api.Student.Response.Body;
type GetEndpoint = z.infer<typeof GetZ>;
async function getHandler(req: Request): Promise<GetEndpoint> {
	const data = await StudentTable.get(req.params.userid);

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

	await StudentTable.update(req.params.userid, contents);
}

const DeleteZ = tst.Api.Student.Delete.Response.Body;
type DeleteEndpoint = z.infer<typeof DeleteZ>;
async function deleteHandler(req: Request): Promise<DeleteEndpoint> {
	await StudentTable.delete(req.params.userid);
}

const GET = new Endpoint<GetEndpoint>('GET', '/student/:userid')
	.executor(getHandler);

const PATCH = new Endpoint<PatchEndpoint>('PATCH', '/student/:userid')
	.executor(patchHandler);

const DELETE = new Endpoint<DeleteEndpoint>('DELETE', '/student/:userid')
	.executor(deleteHandler);

export default function inject(router: Router) {
	GET.build(router);
	PATCH.build(router);
	DELETE.build(router);
}
