
const db = require('./db.js')

module.exports = {
  getAllFoods() {
    return db.connectQuery('SELECT * from foods')
  },
  findFood(food) {
    return db.connectQuery(`SELECT * from foods WHERE food ='${food}'`)
  },
  findAutoCompleteFood(term) {
    return db.connectQuery(`SELECT * from foods WHERE food LIKE '%${term}%'`)
  }
}
