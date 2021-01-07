import { Router } from 'express'

const router = Router().get('/', function (req, res, next) {
  console.log('Request Type:', req.method)

  res.send('..')
})

export default router
