const axios = require('axios')

function getNames(params) {
  return axios({
    // Link for local testing
    //url: `http://localhost:3001/names`,
    url: `http://35.228.155.3:3001/names`,
    method: 'GET',
    params: params,
  }).then((resp) => resp)
}

module.exports = { getNames }
