import { Router } from 'express'
import controller from '@controller'

const router = Router().get('/', function (req, res, next) {
  console.log('Request Type:', req.method)

  res.send('..')
})

export { router }
