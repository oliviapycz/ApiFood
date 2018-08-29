const mongoose = require('mongoose')
const app = require('./app')

// require('dotenv').config() will be in the nuxt config file

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🚫🚫🚫🚫 → ${err.message}`);
});


// import all of our models
require('./models/Food');
require('./models/User');

// Start our app!
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
