const axios = require('axios')

function getNames(params) {
  return axios({
    // Link for local testing
    url: `http://localhost:3001/names`,
    //url: `http://35.228.155.3:3001/names`,
    method: 'GET',
    params: params,
  }).then((resp) => resp.data)
}

module.exports = { getNames }

/* FAKE API for hosting it whitout back-end
const getNames = (params) => {
  console.log('Get: ', params)
  const data = [
      {
          "name": "Ville",
          "amount": 24
      },
      {
          "name": "Anna",
          "amount": 6
      },
      {
          "name": "Antti",
          "amount": 22
      },
      {
          "name": "Sanna",
          "amount": 5
      },
      {
          "name": "Mikko",
          "amount": 19
      },
      {
          "name": "Minna",
          "amount": 5
      },
      {
          "name": "Timo",
          "amount": 18
      },
      {
          "name": "Satu",
          "amount": 5
      },
      {
          "name": "Tuomas",
          "amount": 16
      },
      {
          "name": "Tiina",
          "amount": 5
      },
      {
          "name": "Tero",
          "amount": 15
      },
      {
          "name": "Kati",
          "amount": 5
      },
      {
          "name": "Sami",
          "amount": 15
      },
      {
          "name": "Henna",
          "amount": 4
      },
      {
          "name": "Mika",
          "amount": 12
      },
      {
          "name": "Liisa",
          "amount": 4
      },
      {
          "name": "Janne",
          "amount": 12
      },
      {
          "name": "Paula",
          "amount": 4
      },
      {
          "name": "Petri",
          "amount": 11
      },
      {
          "name": "Suvi",
          "amount": 4
      }
    ]
    
    return new Promise(resolve => setTimeout(() => resolve(data), 500));
}

export default{ getNames } 
*/