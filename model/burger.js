const orm = require('../config/orm.js');

// the "err" here may not be needed, if I just presume that if result makes it this far it has already passed the orm error check...
const burger = {
  all: function(cb) {
    orm.all('burgers', (err, result) => {
      // if (err) throw err;
      if (err) {
        console.log(err);
      }
      cb(err, result);
    });
  },
  insert: function( val, val2, cb) {
    orm.insert('burgers', val, val2, (err, result) => {
      // if (err) throw err;
      // console.log("I'm model.insert err :", err);
      cb(err, result);
    });
  },
  update: function(col, val, cb) {
    orm.update('burgers', col, val, (err, result) => {
      if (err) throw err;
      cb(err, result);
    });
  }
};

module.exports = burger;
