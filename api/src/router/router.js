import { Router } from 'express'
import postgresController from '@controller/postgresController'

const router = Router()
  // Set CORS header to all the requests
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
  })

  // TODO: return api info from the root route
  .get('/', function (req, res, next) {
    console.log('Request Type:', req.method)
    res.send('..')
  })
  .get('/names', postgresController.getSortedNames)

export default router
