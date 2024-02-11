import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB({
	region: 'us-east-1'
}));

const TABLES = {
	students: 'LernibData-Students',
	calendar: 'LernibData-Calendar'
};

export { dynamo, TABLES };
