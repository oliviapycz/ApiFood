const express = require('express')
const app = express.Router()
const model = require('../Models/measuresModel')

app.get('/measures', (req, res) => {
    model.getAllMeasures()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  });

  module.exports = app;