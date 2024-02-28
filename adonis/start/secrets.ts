import { SecretsManagerClient, GetSecretValueCommand } from '@aws-sdk/client-secrets-manager'

const client = new SecretsManagerClient({
  region: 'us-east-1',
})

export async function get_secret(name: string): Promise<string> {
  try {
    const secret = await client
      .send(
        new GetSecretValueCommand({
          SecretId: name,
          VersionStage: 'AWSCURRENT',
        })
      )
      .then((res) => res.SecretString)

    if (secret) {
      return secret
    }

    throw new Error('Secret is undefined')
  } catch (error) {
    throw error
  }
}
