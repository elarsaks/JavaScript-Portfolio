const { response } = require('express')
const redis = require('redis')
const client = redis.createClient(process.env.REDIS_URL)

// Log connection info
client.on('connect', function () {
  console.log('Connected to Redis')
})

// Log connection errors
client.on('error', function (err) {
  console.log(err)
})

const getNames = (keyName, res, next) => {
  return client.get(keyName, (err, reply) => {
    if (reply !== null) {
      res.send(JSON.parse(reply))
    } else {
      next()
    }
  })
}

const setSortedNames = (keyName, data) => {
  // Set sorted name data into redis with time to live 300s / 60 = 5 minutes
  return client.set(keyName, JSON.stringify(data), 'EX', 300, err => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log(`'${keyName}' data added to Redis`)
    }
  })
}

module.exports = { getNames, setSortedNames }
