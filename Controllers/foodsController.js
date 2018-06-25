const express = require('express')
const app = express.Router()
const model = require('../Models/foodsModel')

app.get('/foods', (req, res) => {
    model.getAllFoods()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  });

  module.exports = app;