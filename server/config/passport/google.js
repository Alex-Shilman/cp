import mongoose from 'mongoose';
import User from '../../models/user';
import config from '../../../etc/client-config.json';
const GoogleStrategy = require('passport-google-oauth2').Strategy;

/*
 * OAuth Strategy taken modified from https://github.com/sahat/hackathon-starter/blob/master/config/passport.js
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 *
 * The Google OAuth 2.0 authentication strategy authenticates users using a Google account and OAuth 2.0 tokens.
 * The strategy requires a verify callback, which accepts these credentials and calls done providing a user, as well
 * as options specifying a client ID, client secret, and callback URL.
 */
export default new GoogleStrategy({
    clientID            : config.googleAuth.clientID,
    clientSecret        : config.googleAuth.clientSecret,
    callbackURL         : config.googleAuth.callbackURL,
    passReqToCallback   : true
}, (req, accessToken, refreshToken, profile, done) => {
    var user = {};
    user.email = profile._json.emails[0].value;
    user.google = profile.id;
    user.profile = {};
    user.tokens = [];
    user.tokens.push({kind: 'google', accessToken: accessToken});
    user.profile.name = profile._json.displayName;
    user.profile.gender = profile._json.gender;
    user.profile.picture = profile._json.image.url;
    done(null, user);

    if (req.user) {
       User.findOne({google: profile.id}, function (err, existingUser) {
           User.findOne({google: profile.id}, function (err, existingUser) {
               if (existingUser) return done(null, existingUser);

               var user = new User();
               user.email = profile._json.emails[0].value;
               user.google = profile.id;
               user.tokens.push({kind: 'google', accessToken: accessToken});
               user.profile.name = profile._json.displayName;
               user.profile.gender = profile._json.gender;
               user.profile.picture = profile._json.image.url;
               user.save(function (err) {
                   done(err, user);
               });

           });
       });
    } else {
       User.findOne({google: profile.id}, function (err, existingUser) {
           if (existingUser) return done(null, existingUser);

           var user = new User();
           user.email = profile._json.emails[0].value;
           user.google = profile.id;
           user.tokens.push({kind: 'google', accessToken: accessToken});
           user.profile.name = profile._json.displayName;
           user.profile.gender = profile._json.gender;
           user.profile.picture = profile._json.image.url;
           user.save(function (err) {
               done(err, user);
           });

       });
    }
});