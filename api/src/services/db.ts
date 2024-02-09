import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB({
	region: 'us-east-1'
}));
const TABLE_NAME = 'LernibData-Students';

export { dynamo, TABLE_NAME };
