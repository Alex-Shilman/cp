import express from 'express';
import users   from '../controllers/users';
const router = express.Router();

const routes = (app, passport) => {

    router.post('/login', users.postLogin);
    router.get('/logout', users.getLogout);
    router.post('/signup', users.postSignUp);
    router.get('/google/callback',
        passport.authenticate('google', {failureRedirect: '/login'}),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/profile');
        });
    router.get('/facebook/callback',
        passport.authenticate('facebook', {failureRedirect: '/login'}),
        (req, res) => {
            // Successful authentication, redirect home.
            res.redirect('/profile');
        });

    // google auth
    // Redirect the user to Google for authentication. When complete, Google
    // will redirect the user back to the application at
    // /auth/google/return
    // Authentication with google requires an additional scope param, for more info go
    // here https://developers.google.com/identity/protocols/OpenIDConnect#scope-param
    router.get('/google', passport.authenticate('google', {
        scope: [
            'https://www.googleapis.com/auth/plus.login',
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }));

    router.get('/facebook', passport.authenticate('facebook', {
        scope: [
            'public_profile',
            'email'
        ]
    }));

    // Google will redirect the user to this URL after authentication. Finish the
    // process by verifying the assertion. If valid, the user will be logged in.
    // Otherwise, the authentication has failed.
    return router;
};


module.exports = routes;