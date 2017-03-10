import User from '../models/user';
import google   from './passport/google';
import facebook from './passport/facebook';
import linkedin from './passport/linkedin';
import local    from './passport/local';



export default function(app, passport, config) {
    // serialize sessions
    passport.serializeUser((user, done) => {
        console.log('serialize')
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        console.log('deserializeUser')
        done(null, user);


    });

    //use the following strategies
    passport.use(google);
    passport.use(facebook);
    passport.use(linkedin);
    passport.use(local);
};