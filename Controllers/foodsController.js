const express = require('express')
const app = express.Router()
const model = require('../Models/foodsModel')

app.get('/foods', (req, res) => {
    model.getAllFoods()
      .then(result => res.json(result))
      .catch(err => res.json(err))
  });

  app.get('/foods/:food', (req, res) => {
    const {food} = req.params;
    model.findFood(food)
      .then(result => res.json(result))
      .catch(err => res.json(err))
  });

  app.get('/foods/search/result_ing=:term', (req, res) => {
    const {term} = req.params;    
    model.findAutoCompleteFood(term)
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

  module.exports = app;