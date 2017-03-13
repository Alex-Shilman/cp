import User     from '../models/user';
import passport from 'passport';

/**
 * POST /login
 */
exports.postLogin = function(req, res, next) {
    // Do email and password validation for the server
    passport.authenticate('local', function(err, user, info) {
        if(err) return next(err);
        if(!user) {
            req.flash('errors', {msg: info.message});
        }
        // Passport exposes a login() function on req (also aliased as logIn()) that can be used to establish a login session
        req.logIn(user, function(err) {
            if(err) return next(err);
            req.flash('success', { msg: 'Success! You are logged in'});
            res.end('Success');
        });
    })(req, res, next);
};


/**
 * GET /logout
 */
exports.getLogout = function(req, res, next) {
    // Do email and password validation for the server
    req.logout();
    res.redirect(302,`/`);

};

/**
 * POST /signup
 * Create a new local account
 */
exports.postSignUp = (req, res, next) => {
    console.log('here........');
    const { email, password, confirm_password, first_name, last_name } = req.body;

    User.findOne({email: email}, (err, existingUser) => {
        //console.log('Inside User', 'Error', err, 'Existing user', existingUser);
        console.log('ExistingUser outer', existingUser);
        if(existingUser) {
            console.log('Existing User', existingUser);
            //return req.flash('errors', { msg: 'Account with that email address already exists' });
            return res.json({errors: {msg: 'Account with that email address already exists'}});
        }

        const user = new User();
        user.email        = email;
        user.password     = password;
        user.local        = 'local';
        user.profile.name = `${first_name} ${last_name}`;

        console.log('Inside User', user);
        user.save((err) => {

            if(err) return next(err);

            req.logIn(user, (err) => {
                if(err) return next(err);
                console.log('Successfully created');
                res.end('Success');
            });

        });

    });
};