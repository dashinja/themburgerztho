const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  database: 'burgers_db'
  // stringifyObjects: true
});

connection.connect(err => {
  // if (err) throw err;
  console.log("I'm connection err:", err);
  console.log(`DB connected as user_id: ${connection.threadId}`);
});

module.exports = connection;
