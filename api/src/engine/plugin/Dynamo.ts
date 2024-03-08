import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB({
	region: 'us-east-1'
}));

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

export class Table<T extends { [K in PK]: PKT }, PK extends string, PKT = string | number> {
	name: string;
	pk: PK;

	constructor(name: string, pk: PK) {
		this.name = name;
		this.pk = pk;
	}

	public async get(key: PKT): Promise<T | undefined> {
		return await dynamo.get({
			TableName: this.name,
			Key: {
				[this.pk]: key
			}
		}).then((res) => res.Item as T);
	}

	public async getAll(): Promise<T[] | undefined> {
		return await dynamo.scan({
			TableName: this.name
		}).then((res) => res.Items as T[]);
	}

	public async insert(key: PKT, values: Omit<T, PK>) {
		return await dynamo.put({
			TableName: this.name,
			Item: {
				[this.pk]: key,
				...values
			}
		});
	}

	public async update(key: PKT, vals: Omit<T, PK>) {
		const {
			command,
			values,
			keys
		} = updateCommander(vals);

		return await dynamo.update({
			TableName: this.name,
			Key: {
				[this.pk]: key
			},
			UpdateExpression: command,
			ExpressionAttributeNames: keys,
			ExpressionAttributeValues: values,
			ReturnValues: 'ALL_NEW'
		});
	}

	public async delete(key: PKT) {
		return await dynamo.delete({
			TableName: this.name,
			Key: {
				[this.pk]: key
			}
		});
	}
}
