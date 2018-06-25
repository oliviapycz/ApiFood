const mysql = require('mysql');

const db = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USERNAME,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});


db.connect((err) => {
  if (err) {
    return console.log(err)
  } else {
    console.log('db connected');
  }
})


// we transform the callbacks into promises
db.connectQuery = (query) => new Promise( (resolve, reject) => {
  db.query(query, (err, result) => {
    err ? reject(err) : resolve(result)
  })
})

db.quoteEscape = (str) => str.replace('\'', '\'\'')

module.exports = db;