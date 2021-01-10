const { redis } = require('@repository')

const getSortedNames = (req, res, next) => {
  let keyName = req.query.column.concat(req.query.order)
  return redis.getNames(keyName, res, next)
}

const setSingleSortedName = (req, data) => {
  let keyName = req.query.column.concat(req.query.order)
  redis.setSortedNames(keyName, data)
}

module.exports = {
  getSortedNames,
  setSingleSortedName,
}
