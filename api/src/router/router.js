import { Router } from 'express'
import postgresController from '@controller/postgresController'

const router = Router()
  .get('/', function (req, res, next) {
    console.log('Request Type:', req.method)

    res.send('..')
  })
  .get('/names', postgresController.getSortedNames)

export default router
