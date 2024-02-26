import { Router } from 'express';
import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { dynamo, TABLES } from '$services/db';
// import type { EventInput } from '@fullcalendar/core';

const router = Router();

router.get('/events', async (req, res) => {
	let data = await dynamo.send(
		new ScanCommand({
			TableName: TABLES.calendar
		})
	).then(res => res.Items);

	if (!data) {
		return res.status(500).end();
	}

	data = data.map((item) => {
		const { eventid, ...others } = item;
	
		return {
			id: eventid,
			...others
		};
	});

	res.status(200).json(
		data
	);
});

export default router;
