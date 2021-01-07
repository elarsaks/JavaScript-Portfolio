import { Router } from 'express'
import postgres from '@repository/postgres'

export default class namesController {
  // Insert starting data
  static populatePostgres(names, next) {
    let resp = names.map(name => {
      postgres.addOneName(name)
    })

    return Promise.all(resp)
  }

  static getNames
}
