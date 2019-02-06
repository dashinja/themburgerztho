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
  insert: function(col, val, cb) {
    orm.insert('burgers', col, val, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(col, val, cb) {
    orm.update('burgers', col, val, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = burger;
