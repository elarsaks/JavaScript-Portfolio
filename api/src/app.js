import express from 'express'
import router from '@router/router'
import postgresController from '@controller/postgresController.js'
import postgres from '@repository/postgres'
import initialNames from '@repository/names'

const PORT = process.env.PORT || 3001
const app = express()
app.use(router)

app.listen(PORT, function () {
  console.log('Api listening on port:', PORT)

  // Setup Postgres database
  postgres
    .deleteAllNames()
    .then(() => postgresController.populatePostgres(initialNames))
    .then(() => console.log('Database populated'))
})
