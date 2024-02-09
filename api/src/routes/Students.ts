import { Router } from 'express';
import { ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLE_NAME } from '$services/db';
import studentRouter from './Student';

const router = Router();

router.get('/', async (req, res) => {
	const data = await dynamo.send(
		new ScanCommand({
			TableName: TABLE_NAME
		})
	).then(res => res.Items);

	if (!data) {
		return res.status(404).end();
	}

	res.status(200).json(data);
});

router.post('/', async (req, res) => {
	const contents = JSON.parse(req.body);

	await dynamo.send(
		new PutCommand({
			TableName: TABLE_NAME,
			Item: contents
		})
	);

	return res.status(200).end();
});

router.use('/', studentRouter);

export default router;
