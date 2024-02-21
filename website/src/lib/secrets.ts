import { env } from '$env/dynamic/private'
import { dev, building } from '$app/environment'
import {
  SecretsManagerClient,
  GetSecretValueCommand
} from "@aws-sdk/client-secrets-manager";


export const COGNITO_CLIENT_SECRET = await getCognitoClientSecret()

async function getCognitoClientSecret(): Promise<string> {
  if (building) {
    return ''
  }

  if (dev) {
    return env.COGNITO_CLIENT_SECRET;
  } else {
    const client = new SecretsManagerClient({
      region: 'us-east-1'
    })

    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: 'LernibSecret-LernibAuth-Website',
        VersionStage: 'AWSCURRENT'
      })
    )

    return response.SecretString || (() => {
      throw new Error("Could not fetch secret")
    })()
  }
}
