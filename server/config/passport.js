import User from '../models/user';
import google from './passport/google';
//var local = require('./passport/local');
//var facebook = require('./passport/facebook');


export default function(app, passport, config) {
    // serialize sessions
    passport.serializeUser(function(user, done) {
        console.log('serialize')
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        console.log('deserializeUser')
        done(null, user);


    });

    //use the following strategies
    passport.use(google);
    //passport.use(facebook);
    //passport.use(local);
};