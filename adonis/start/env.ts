/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'
import { get_secret } from './secrets.js'

interface PostgresSecret {
  username: string
  password: string
}

let appEnv = await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring session package
  |----------------------------------------------------------
  */
  SESSION_DRIVER: Env.schema.enum(['cookie', 'memory'] as const),

  /*
  |----------------------------------------------------------
  | Variables for configuring database connection
  |----------------------------------------------------------
  */
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string(),
  RUN_ENV: Env.schema.enum(['local', 'dev', 'prod'] as const),
})

let runEnv = appEnv.get('RUN_ENV')

switch (runEnv) {
  case 'dev':
    {
      let secret: PostgresSecret = await get_secret(
        'rds!db-0373f312-1c56-4d36-8a83-87eb01851688'
      ).then((res) => JSON.parse(res))

      appEnv.set('DB_USER', secret.username)
      appEnv.set('DB_PASSWORD', secret.password)
    }
    break
}

export default appEnv
