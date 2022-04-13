const mysql = require('mysql2')

// Connect to database 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Piccolo93X!!',
    database: 'election'
  }
)

module.exports = db;