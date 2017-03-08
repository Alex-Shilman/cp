import User              from '../../models/user';
import config            from '../../../etc/client-config.json';
import passportFacebook from 'passport-facebook';

const facebookStrategy = passportFacebook.Strategy;

export default new facebookStrategy({
    clientID            : config.facebookAuth.clientID,
    clientSecret        : config.facebookAuth.clientSecret,
    callbackURL         : config.facebookAuth.callbackURL,
    passReqToCallback   : true,
    profileFields       : ['id', 'name', 'displayName', 'photos', 'hometown', 'profileUrl', 'friends']
}, (req, accessToken, refreshToken, profile, done) => {
    console.log('FACEbook', profile);
    var user        = {};
    user.email      = profile._json.email;
    user.facebook   = profile.id;
    user.profile    = {};
    user.tokens     = [];
    user.tokens.push({kind: 'facebook', accessToken: accessToken});
    user.profile.name       = profile._json.name;
    user.profile.gender     = profile._json.gender;
    user.profile.picture    = profile.photos[0].value;
    done(null, user);

    if (req.user) {
       User.findOne({facebook: profile.id}, function (err, existingUser) {
           if (existingUser) return done(null, existingUser);
           var user             = new User();
           user.email           = profile._json.email;
           user.facebook        = profile.id;
           user.tokens.push({kind: 'facebook', accessToken: accessToken});
           user.profile.name    = profile._json.displayName;
           user.profile.gender  = profile._json.gender;
           user.profile.picture = profile.photos[0].value;
           user.save(function (err) {
               done(err, user);
           });

       });
    } else {
       User.findOne({facebook: profile.id}, function (err, existingUser) {
           if (existingUser) return done(null, existingUser);
           var user = new User();
           user.email = profile._json.email;
           user.facebook = profile.id;
           user.tokens.push({kind: 'facebook', accessToken: accessToken});
           user.profile.name = profile._json.displayName;
           user.profile.gender = profile._json.gender;
           user.profile.picture = profile.photos[0].value;
           user.save(function (err) {
               done(err, user);
           });

       });
    }
});