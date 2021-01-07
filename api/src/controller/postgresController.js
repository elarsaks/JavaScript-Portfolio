import { Router } from 'express'
import postgres from '@repository/postgres'

export default class namesController {
  // Insert initial data
  static populatePostgres(names, next) {
    let resp = names.map(name => {
      postgres.addOneName(name)
    })

    return Promise.all(resp)
  }

  static getSortedNames(req, res) {
    // TODO: continue after finishing client ...
    console.log(req)
    let params = {
      column: 'amount',
      order: 'ASC',
    }
    return postgres.getSortedNames(params)
  }
}
