const db = require('./db.js')

module.exports = {

    getAllMeasures() {
      return db.query('SELECT * from measures')
  },
}
