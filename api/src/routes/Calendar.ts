import { Router } from 'express';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES } from '$services/db';
// import type { EventInput } from '@fullcalendar/core';

const router = Router();

router.get('/events', async (req, res) => {
	const data = await dynamo.send(
		new ScanCommand({
			TableName: TABLES.calendar
		})
	).then(res => res.Items);

	if (!data) {
		return res.status(500).end();
	}

	res.status(200).json(data);
});

export default router;
