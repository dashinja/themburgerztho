const connection = require('./connection')

const orm = {
  all: selectAll(table, cb),
  insert: insertOne(),
  update: updateOne()
}

// functions

const selectAll = (table, cb) => {
  let myQuery = 'SELECT * FROM ?'
  let options = [table]
  connection.query(myQuery, options, (err, result) => {
    if (err) throw err
    cb(result)
  })
}

const insertOne = (table, col, val, cb) => {
  let myQuery = 'INSERT INTO ? ?? ?'
  let options = [table, col.toString(), val]
  connection.query(myQuery, options, (err, result) => {
    if (err) throw err
    cb(result)
  })
}

// "UPDATE tableName SET colName WHERE conditionVal = conditionToBeUpdated"
const updateOne = (table, col, conditionEquals, cb) => {
  let myQuery = 'UPDATE ? SET ? WHERE ?'
  let options = [table, col.toString(), conditionEquals]
  connection.query(myQuery, options, (err, result) => {
    if (err) throw err
    cb(result)
  })
}

module.exports = orm
