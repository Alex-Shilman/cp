import User             from '../../models/user';
import passportLocal    from 'passport-local';

const localStrategy = passportLocal.Strategy;

export default new localStrategy({
    usernameField       : 'email',
    passwordField       : 'password',
    passReqToCallback   : true,
    session             : true
}, (req, email, password, done) => {
    User.findOne({email}, (err, user) => {
        if(!user) return (null,  false,  { message: `${email} not found`});
        user.comparePassword(password,  (err, isMatch) => {
            (isMatch)
                ? done(null, user)
                : done(null, false, { message: `Invalid email or password`});

            console.log('--------LocalStrategy----------');
            console.log('req.user', req.user);
        });
    });
});