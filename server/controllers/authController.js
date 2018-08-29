const passport = require('passport');
const crypto = require('crypto');
const mongoose = require('mongoose');
const User = require('../models/User')
mongoose.model('User');
// const promisify = require('es6-promisify');
// const mail = require('../handlers/mail');

export const login = passport.authenticate('local', {
    failureRedirect: '/login',
    // failureFlash: 'Failed Login',
    successRedirect:'/',
    // successFlash: 'You are now logged in'
});

export const logout = (req, res) => {
    // req.logout()
    delete req.session.authUser
    res.json({ ok: true })
    console.log('success', 'Your are now logged out')
};

exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
        return;
    }
    console.log('error', 'You must be logged in to access this page');
    res.redirect('/login');
};

exports.forgot = async (req, res) => {
    // see if the user exist
    const user = await User.findOne({ email: req.body.email });
    if(!user) {
        console.log('error', 'No account with that email address');
        return res.redirect('/login');
    }
    // set reset token and expiry on their account
    // crypto is nodejs native
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordExpires = Date.now() + 3600000; // an hour from now
    await user.save();
    // send email with the token
    const resetURL = `http://${req.headers.host}/account/reset/${user.resetPasswordToken}`;
    await mail.send({
        user,
        subject: 'Password Reset',
        resetURL,
        filename: 'password-reset'
    })
    // req.flash('success', `You have been emailed a password reset link.`)
    // redirect to login page
    res.redirect('/login');
};

exports.reset = async (req, res) => {
    const user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
    });
    if (!user) {
        // req.flash('error', 'Password reset is invalid or has expired');
        return res.redirect('/login');
    }
    // if user show the reset password form
    res.render('reset', { title: 'Reset your Password' })

};

exports.confirmedPassword = (req, res, next) => {
    if (req.body.password === req.body.repassword) {// same as req.body.password-confirm but deal with the -
        next();
        return;
    }
    //req.flash('error', 'Passwords do not match');
    return res.redirect('back');
};

exports.update = async (req, res) => {
    const user = await User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: { $gt: Date.now() }
    });
    if (!user) {
        // req.flash('error', 'Password reset is invalid or has expired');
        return res.redirect('/login');
    }
    // setPassword is a method from the plugin
    const setPassword = promisify(user.setPassword, user);
    await setPassword(req.body.password);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    const updateUser = await user.save();
    // method login from passport
    await req.login(updateUser);
    // req.flash('success', 'Your password has been reset.');
    res.redirect('/');
};