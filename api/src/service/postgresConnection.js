import pgPromise from 'pg-promise'

const postgresConfig = {
  host: '127.0.0.1',
  port: '5432',
  database: 'solita',
  user: 'postgres',
  password: 'password',
}

const pgp = pgPromise()
const db = pgp(postgresConfig)

export default { db }
