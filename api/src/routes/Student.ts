import { Router } from 'express';
import { GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLE_NAME } from '$services/db';

const router = Router();

router.get('/:userid', async (req, res) => {
	const data = await dynamo.send(
		new GetCommand({
			TableName: TABLE_NAME,
			Key: {
				userid: req.params.userid
			}
		})
	).then(res => res.Item);

	if (!data) {
		res.status(404).send();
	}

	res.status(200).json(data);
});

router.post('/:userid', async (req, res) => {
	const contents = JSON.parse(req.body);

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

	const expressionKeys = keys.reduce((acc: any, [key], idx) => {
		acc[`#${
			String.fromCharCode(idx + 'A'.charCodeAt(0))
		}`] = key;
		return acc;
	}, {});

	await dynamo.send(
		new UpdateCommand({
			TableName: TABLE_NAME,
			Key: {
				userid: req.params.userid
			},
			UpdateExpression: updateCommand,
			ExpressionAttributeValues: expressionValues,
			ExpressionAttributeNames: expressionKeys,
			ReturnValues: 'ALL_NEW'
		})
	);

	res.status(200).send();
});

export default router;
