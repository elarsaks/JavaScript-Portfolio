import { Router } from 'express'
import { redisController } from '@controller'
import { postgresController } from '@controller'

const router = Router()
  // Set CORS header to all the requests
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Cache-Control', 'no-store max-age=0')
    next()
  })

  .get('/', function (req, res, next) {
    res.send({
      names: {
        link: '/names',
        params: {
          column: 'String (column name)',
          order: 'String ("ASC" or "DESC")',
        },
      },
    })
  })

  .get(
    '/names',
    redisController.getSortedNames,
    postgresController.getSortedNames
  )

export default router
