import pgPromise from 'pg-promise'

const postgresConfig = {
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  port: process.env.POSTGRES_PORT || 5432,
  database: process.env.POSTGRES_DB || 'solita',
  user: process.env.POSTGRES_USERNAME || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'password',
}

const pgp = pgPromise()
const db = pgp(postgresConfig)

export default { db }
