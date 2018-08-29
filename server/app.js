const express =require('express')
const session =require('express-session')
const bodyParser =require('body-parser')
const expressValidator =require('express-validator')
const cookieParser =require('cookie-parser')
const cors =require('cors')
const passport =require('passport')
const mongoose =require('mongoose')
const { Nuxt, Builder } =require('nuxt')
const MongoStore = require('connect-mongo')(session)
const promisify =require('es6-promisify')
const routes = require('./routes/index')
require('./handlers/passport');
const errorHandlers = require('./handlers/errorHandlers')
const helpers = require('./helpers');

// import api from './api'
// import { db } from './config'

// create our Express app
const app = express()

// view engine setup
app.set('view engine', 'nuxt');

// enable CORS
app.use(cors());

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
app.use(expressValidator());

// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
// app.set('port', port)

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// populates req.cookies with any cookies that came along with the request
app.use(cookieParser());

// Sessions allow us to store data on visitors from request to request
// This keeps users logged in and allows us to send flash messages
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
// app.use(session({
//   secret: '9dj48bhkldhr48fj3890drkgb6739&#HF(&5j5&*^%',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { maxAge: 60000 }
// }))

// Passport JS is what we use to handle our logins
app.use(passport.initialize());
app.use(passport.session());


// pass variables to our templates + all requests
app.use((req, res, next) => {
  res.locals.h = helpers;
  // res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
  });


// After all that above middleware, we finally handle our own routes!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
// app.use(errorHandlers.notFound);

// Set up DB
// mongoose.connect(db)
// mongoose.Promise = global.Promise

// Set up passport auth
// require('./auth_config')(passport)

// app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
// app.listen(port, host)
// console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console

module.exports = app;