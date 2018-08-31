const mongoose = require('mongoose');
const User = require('../models/User')
mongoose.model('User');
const promisify = require('es6-promisify');

export const validateRegister = (req, res, next) => {    
    //  come from app.js the expressValidator plugin
    req.sanitizeBody('username');
    req.checkBody('username', 'You must supply a username').notEmpty();
    req.checkBody('email', 'That email is not valid').isEmail();
    req.sanitizeBody('email').normalizeEmail({ 
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    });
    req.checkBody('password', 'You must supply a password').notEmpty();
    req.checkBody('repassword', 'You must confirm your password').notEmpty();
    req.checkBody('repassword', 'Your passwords must be the same').equals(req.body.password);
    
    const errors = req.validationErrors();
    if (errors) {
        console.log('errors', errors);
        
        return; // stop the fn from running
    }
    next(); // there were no errors
};

export const register = async (req, res, next) => {
    const user = new User({ email: req.body.email, username: req.body.username });
    console.log('user', user);
    
    // User.register(user, req.body.pasword, function(err,  user) {
        //   
    // });
    // the method register use callback
    // with the plugin promisify we can turn it to a promise
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    next(); // pass to authController.login
    console.log(req.body.password);
};