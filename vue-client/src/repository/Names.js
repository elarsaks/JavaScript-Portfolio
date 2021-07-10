const axios = require('axios')

function getNames(params) {
  return axios({
    // Link for local testing
    // url: `http://localhost:3001/names`,
    url: `http://34.135.18.29:3001/names`,
    method: 'GET',
    params: params,
  }).then((resp) => resp.data)
}

module.exports = { getNames }

