const express = require('express')
const router = express.Router()
const controller = require('../controller/controller.js')

// Provide information about API links
router.get('/', (req, res) => {
  res.send({
    names: {
      getNames: '/getNames',
    },
  })
})

// Get names from Postgres
//router.get('/getNames/', controller.getNames)

module.exports = router
