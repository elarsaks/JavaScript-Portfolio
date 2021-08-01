// const axios = require('axios')

function getNames(params) {

  const namesASC = [{ "name": "Anna", "amount": 6 }, { "name": "Antti", "amount": 22 }, { "name": "Henna", "amount": 4 }, { "name": "Janne", "amount": 12 }, { "name": "Kati", "amount": 5 }, { "name": "Liisa", "amount": 4 }, { "name": "Mika", "amount": 12 }, { "name": "Mikko", "amount": 19 }, { "name": "Minna", "amount": 5 }, { "name": "Paula", "amount": 4 }, { "name": "Petri", "amount": 11 }, { "name": "Sami", "amount": 15 }, { "name": "Sanna", "amount": 5 }, { "name": "Satu", "amount": 5 }, { "name": "Suvi", "amount": 4 }, { "name": "Tero", "amount": 15 }, { "name": "Tiina", "amount": 5 }, { "name": "Timo", "amount": 18 }, { "name": "Tuomas", "amount": 16 }, { "name": "Ville", "amount": 24 }];
  const namesDESC = [{ "name": "Ville", "amount": 24 }, { "name": "Tuomas", "amount": 16 }, { "name": "Timo", "amount": 18 }, { "name": "Tiina", "amount": 5 }, { "name": "Tero", "amount": 15 }, { "name": "Suvi", "amount": 4 }, { "name": "Satu", "amount": 5 }, { "name": "Sanna", "amount": 5 }, { "name": "Sami", "amount": 15 }, { "name": "Petri", "amount": 11 }, { "name": "Paula", "amount": 4 }, { "name": "Minna", "amount": 5 }, { "name": "Mikko", "amount": 19 }, { "name": "Mika", "amount": 12 }, { "name": "Liisa", "amount": 4 }, { "name": "Kati", "amount": 5 }, { "name": "Janne", "amount": 12 }, { "name": "Henna", "amount": 4 }, { "name": "Antti", "amount": 22 }, { "name": "Anna", "amount": 6 }];
  const amountASC = [{"name":"Paula","amount":4},{"name":"Henna","amount":4},{"name":"Suvi","amount":4},{"name":"Liisa","amount":4},{"name":"Sanna","amount":5},{"name":"Tiina","amount":5},{"name":"Satu","amount":5},{"name":"Kati","amount":5},{"name":"Minna","amount":5},{"name":"Anna","amount":6},{"name":"Petri","amount":11},{"name":"Janne","amount":12},{"name":"Mika","amount":12},{"name":"Sami","amount":15},{"name":"Tero","amount":15},{"name":"Tuomas","amount":16},{"name":"Timo","amount":18},{"name":"Mikko","amount":19},{"name":"Antti","amount":22},{"name":"Ville","amount":24}];
  const amountDesc = [{"name":"Ville","amount":24},{"name":"Antti","amount":22},{"name":"Mikko","amount":19},{"name":"Timo","amount":18},{"name":"Tuomas","amount":16},{"name":"Sami","amount":15},{"name":"Tero","amount":15},{"name":"Mika","amount":12},{"name":"Janne","amount":12},{"name":"Petri","amount":11},{"name":"Anna","amount":6},{"name":"Sanna","amount":5},{"name":"Satu","amount":5},{"name":"Minna","amount":5},{"name":"Tiina","amount":5},{"name":"Kati","amount":5},{"name":"Liisa","amount":4},{"name":"Paula","amount":4},{"name":"Henna","amount":4},{"name":"Suvi","amount":4}];

  let response = params.column == 'names'
    ? params.order == 'ASC'
      ? namesASC
      : namesDESC
    : params.order == 'ASC'
      ? amountASC
      : amountDesc

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, 100);
  }) 

  /*
  return axios({
    // url: `http://localhost:3001/names`,
    url: `http://34.135.18.29:3001/names`,
    method: 'GET',
    params: params,
  }).then((resp) => resp.data) */
}

module.exports = { getNames }

