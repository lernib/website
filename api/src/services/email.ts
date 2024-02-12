import { SESClient } from '@aws-sdk/client-ses';

const client = new SESClient({
	region: 'us-east-1'
});

export default client;
