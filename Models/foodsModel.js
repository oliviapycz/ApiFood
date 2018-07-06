
const db = require('./db.js')

module.exports = {
  getAllFoods() {
    return db.query('SELECT * from public.foods')
  },
  findFood(food) {
    return db.query(`SELECT * from foods WHERE food ='${food}'`)
  },
  findAutoCompleteFood(term) {
    return db.query(`SELECT * from foods WHERE food LIKE '%${term}%'`)
  }
}