import User             from '../../models/user';
import config           from '../../../etc/client-config.json';
import passportLinked   from 'passport-linkedin';

const linkedStrategy = passportLinked.Strategy;

export default new linkedStrategy({
    consumerKey         : config.linkedinAuth.clientID,
    consumerSecret      : config.linkedinAuth.clientSecret,
    callbackURL         : config.linkedinAuth.callbackURL,
    passReqToCallback   : true,
    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline', 'picture-url']
}, (req, accessToken, refreshToken, profile, done) => {
    console.log('Linkedin', profile);

    var user                = {};
    user.profile            = {};
    user.tokens             = [];
    user.email              = profile._json.emailAddress;
    user.linkedin           = profile.id;
    user.profile.name       = `${profile._json.firstName} ${profile._json.lastName}`;
    user.profile.picture    = profile._json.pictureUrl;
    user.tokens.push({kind: 'linkedin', accessToken: accessToken});

    done(null, user);
    /*
    if (req.user){
        User.findOne({linkedin: profile.id}, (err, existingUser) => {
           if(existingUser) return done(null,  existingUser);
            const user              = new User();
            user.email              = profile._json.email;
            user.linkedin           = profile.id;
            user.profile.name       = profile._json.displayName;
            user.profile.gender     = profile._json.gender;
            user.profile.picture    = profile.photos[0].value;
            user.tokens.push({kind: 'linkedin', accessToken: accessToken});
            user.save(err => {
                done(err,  user);
            });
        });
    }else{

    }
    */
});