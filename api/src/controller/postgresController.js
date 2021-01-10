import { postgres } from '@repository'
import { redisController } from '@controller'

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
      .then(data => {
        // Set data into Redis cache
        redisController.setSingleSortedName(req, data)
        return data
      })
      .then(data => res.status(200).send(data))
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
  }
}
