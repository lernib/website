import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument, GetCommand, UpdateCommand } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB());
const TABLE_NAME = "LernibData-Students";

async function get_handler(event) {
	return await dynamo.send(
		new GetCommand({
			TableName: TABLE_NAME,
			Key: {
				userid: event.pathParameters.id
			}
		})
	).then(res => res.Item);
}

async function post_handler(event) {
	let contents = JSON.parse(event.body)

	const keys = Object.keys(contents)

	let updateCommand = Object.entries(contents).reduce((acc, [key]) => {
		let next = `#${String.fromCharCode(keys.indexOf(key) + 'A'.charCodeAt(0))} = :${key.toLowerCase()}`;

		if (acc != 'SET ') {
			next = `, ${next}`
		}

		return `${acc}${next}`
	}, 'SET ')

	let expressionValues = Object.entries(contents).reduce((acc, [key, value]) => {
		acc[`:${key.toLowerCase()}`] = value
		return acc
	}, {})

	let expressionKeys = keys.reduce((acc, [key], idx) => {
		acc[`#${
			String.fromCharCode(idx + 'A'.charCodeAt(0))
		}`] = key
		return acc
	}, {})

	return await dynamo.send(
		new UpdateCommand({
			TableName: TABLE_NAME,
			Key: {
				userid: event.pathParameters.id
			},
			UpdateExpression: updateCommand,
			ExpressionAttributeValues: expressionValues,
			ExpressionAttributeNames: expressionKeys,
			ReturnValues: "ALL_NEW"
		})
	).then(res => res.Item)
}

/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
export const handler = async (event) => {
	//console.log('Received event:', JSON.stringify(event, null, 2));

	let body;
	let statusCode = '200';
	const headers = {
		'Content-Type': 'application/json',
	};

	try {
		switch (event.httpMethod) {
			case 'GET':
				body = await get_handler(event);
				break;
			case 'POST':
				body = await post_handler(event);
				break;
			default:
				throw new Error(`Unsupported method "${event.httpMethod}"`);
		}
	} catch (err) {
		statusCode = '400';
		body = err.message;
	} finally {
		body = JSON.stringify(body);
	}

	return {
		statusCode,
		body,
		headers,
	};
};