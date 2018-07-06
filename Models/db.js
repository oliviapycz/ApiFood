
const { Client } = require('pg');

const db = new Client({
  host     : process.env.PGHOST,
  user     : process.env.PGUSERNAME,
  password : process.env.PGPASSWORD,
  database : process.env.PGDATABASE,
  port     : process.env.PGPORT,
});

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
})

module.exports = db