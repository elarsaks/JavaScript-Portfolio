const axios = require('axios')

 const getNames = (params: Params) => {
  return axios({
    // Link for local testing
    // url: `http://localhost:3001/names`,
    url: `http://34.135.18.29:3001/names`, 
    method: 'GET',
    params: params,
  }).then((resp:any) => resp) 
}

export default{ getNames }