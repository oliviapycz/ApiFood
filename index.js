const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
require('dotenv').config()
const app = express()

const foodsController = require('./Controllers/foodsController');
const measuresController = require('./Controllers/measuresController');

app.use(cors())
app.use(express())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



// Routes et Controller :
app.use('/', foodsController);
app.use('/', measuresController);

// création du serveur et connexion au port 3000
app.listen(port, err => {
    // : app.listen(3000, function(err) {
    if(err) {
      console.log('No connexion');
    }
    console.log('Connexion good on port 3000!');
  })
