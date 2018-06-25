const db = require('./db.js')

module.exports = {

    getAllMeasures() {
      return db.connectQuery('SELECT * from measures')
  }
}
