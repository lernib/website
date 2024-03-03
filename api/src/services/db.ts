import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB({
	region: 'us-east-1'
}));

const TABLES = {
	students: 'LernibData-Students',
	calendar: 'LernibData-Calendar'
};

interface UpdateCommander {
	command: string
	values: Record<string, any>
	keys: Record<string, any>
}

function updateCommander(map: Record<string, any>): UpdateCommander {
	const keys = Object.keys(map);

	const updateCommand = Object.entries(map).reduce((acc, [key]) => {
		let next = `#${String.fromCharCode(keys.indexOf(key) + 'A'.charCodeAt(0))} = :${key.toLowerCase()}`;

		if (acc != 'SET ') {
			next = `, ${next}`;
		}

		return `${acc}${next}`;
	}, 'SET ');

	const expressionValues = Object.entries(map).reduce((acc: Record<string, any>, [key, value]) => {
		acc[`:${key.toLowerCase()}`] = value;
		return acc;
	}, {});

	const expressionKeys = keys.reduce((acc: Record<string, any>, key, idx) => {
		acc[`#${
			String.fromCharCode(idx + 'A'.charCodeAt(0))
		}`] = key;
		return acc;
	}, {});

	return {
		command: updateCommand,
		values: expressionValues,
		keys: expressionKeys
	};
}

export { dynamo, TABLES, updateCommander };
