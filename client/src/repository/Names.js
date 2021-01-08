const axios = require('axios')

function getNames(params) {
  return axios({
    url: `http://localhost:3001/names`,
    method: 'GET',
    params: params,
  }).then(resp => resp.data)
}

module.exports = { getNames }
