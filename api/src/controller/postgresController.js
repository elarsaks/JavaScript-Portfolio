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
    return postgres
      .getSortedNames(req.query)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err))
  }
}
