import User             from '../../models/user';
import passportLocal    from 'passport-local';

export default new passportLocal.Strategy({
    usernameField: 'email'
}, (email, password, done) => {
    User.findOne({email}, (err, user) => {
        if(!user) return (null,  false,  { message: `${email} not found`});
        user.comparePassword(password,  (err, isMatch) => {
            (isMatch)
                ? done(null, user)
                : done(null, false, { message: `Invalid email or password`});
        });
    });
});