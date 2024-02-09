import { Router } from 'express';
import { ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLE_NAME } from '$services/db';

const router = Router();

router.get('/', async (req, res) => {
	const data = await dynamo.send(
		new ScanCommand({
			TableName: TABLE_NAME
		})
	).then(res => res.Items);

	if (!data) {
		res.status(404).send();
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

	res.status(200).send();
});

export default router;
