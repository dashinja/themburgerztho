const connection = require('./connection');

// functions

///// If I do it this way, the functions though correct, don't work correctly. The parameters are expected too soon somehow, and are always undefined. Interesting lesson....doesn't matter if you make your key value paired function as a key and pass parameters there. It just oesn't like it. After I changed this one design choice - what looked like a system wide failure was suddenly a working server.

// const selectAll = (table, cb) => {
//   let myQuery = 'SELECT * FROM ?';
//   let options = [table];
//   connection.query(myQuery, options, (err, result) => {
//     if (err) throw err;
//     cb(result);
//   });
// };

// const insertOne = (table, col, val, cb) => {
//   let myQuery = 'INSERT INTO ? ?? ?';
//   let options = [table, col, val];
//   let query = connection.query(myQuery, options, (err, result) => {
//     // if (err) throw err;
//     cb(result);
//   });
//   console.log(query);
// };

// // "UPDATE tableName SET colName WHERE conditionVal = conditionToBeUpdated"
// const updateOne = (table, col, conditionEquals, cb) => {
//   let myQuery = 'UPDATE ? SET ? WHERE ?';
//   let options = [table, col, conditionEquals];
//   connection.query(myQuery, options, (err, result) => {
//     if (err) throw err;
//     cb(result);
//   });
// };

const orm = {
  all: (table, cb) => {
    let myQuery = 'SELECT * FROM ??';
    let options = table;
    let query = connection.query(myQuery, options, (err, result) => {
      if (err) {
        // console.log("I'm th err", err);
        throw err;
      }
      cb(err, result);
    });
    console.log("I'm Select ALL query:", query.sql);
  },
  insert: (table, val, val2, cb) => {
    // let myQuery = 'INSERT INTO ?? SET (??) VALUES (?)';
    // let myQuery = 'INSERT INTO ?? SET (??,??) VALUES (?,?)';
    let newQuery = 'INSERT INTO ' + table + ' SET ?'
    // let options = [table, col.toString(), val.toString()];
    let newOptions = {burger_name: val.toString(), devoured: val2.toString()}
    let query = connection.query(newQuery, newOptions, (err, result) => {
      // if (err) throw err;
      console.log("I'm the orm.insert err: ", err);
      cb(err, result);
    });
    // query();
    console.log(query.sql);
  },
  update: (table, col, conditionEquals, cb) => {
    let myQuery = 'UPDATE ? SET ? WHERE ?';
    let options = [table, col.toString(), conditionEquals];
    connection.query(myQuery, options, (err, result) => {
      if (err) throw err;
      cb(err, result);
    });
  }
};
// const orm = {
//   all: selectAll(table, cb),
//   insert: insertOne(table, col, val, cb),
//   update: updateOne(table, col, conditionEquals, cb)
// };

module.exports = orm;
