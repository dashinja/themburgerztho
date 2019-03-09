const connection = require('./connection')

const orm = {
  all: (table, cb) => {
    let myQuery = 'SELECT * FROM ??'
    let options = table
    let query = connection.query(myQuery, options, (err, result) => {
      if (err) {
        throw err
      }
      cb(err, result)
    })
  },
  insert: (table, val, val2, cb) => {
    let newQuery = 'INSERT INTO ' + table + ' SET ?'
    let newOptions = { burger_name: val.toString(), devoured: val2.toString() }
    let query = connection.query(newQuery, newOptions, (err, result) => {
      cb(err, result)
    })
  },
  update: (table, id, cb) => {
    let myQuery = 'UPDATE ' + table + ' SET ? WHERE ?'
    let options = [{ devoured: true }, { id: id }]
    let query = connection.query(myQuery, options, (err, result) => {
      if (err) throw err
      cb(err, result)
    })
  },
}

module.exports = orm
