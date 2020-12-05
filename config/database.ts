import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

import Url from 'url-parse'
const DATABASE_URL = new Url(Env.get('DATABASE_URL'))

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {
  connection: Env.get('DB_CONNECTION'),

  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST', DATABASE_URL.hostname),
        port: Env.get('PG_PORT', DATABASE_URL.port),
        user: Env.get('PG_USER', DATABASE_URL.username),
        password: Env.get('PG_PASSWORD', DATABASE_URL.password),
        database: Env.get('PG_DB_NAME', DATABASE_URL.pathname.substr(1)),
      },
      healthCheck: false,
      debug: false,
    },
  },
  orm: {},
}

export default databaseConfig
