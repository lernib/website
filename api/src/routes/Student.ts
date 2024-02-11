import { Router } from 'express';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES } from '$services/db';

const router = Router();

router.get('/:userid', async (req, res) => {
	const data = await dynamo.send(
		new GetCommand({
			TableName: TABLES.students,
			Key: {
				userid: req.params.userid
			}
		})
	).then(res => res.Item);

	if (!data) {
		return res.status(404).end();
	}

	res.status(200).json(data);
});

router.post('/:userid', async (req, res) => {
	const contents = req.body;

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

	return res.status(200).end();
});

export default router;
