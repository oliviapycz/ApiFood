
const db = require('./db.js')

module.exports = {
    getAllFoods() {
      return db.connectQuery('SELECT * from foods')
  }
}
