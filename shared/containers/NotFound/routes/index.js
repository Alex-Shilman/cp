module.exports = (store) => {
    return {
        path: '*',
        getComponent(location, cb) {
            if (process.env.BROWSER) {
                require.ensure([], (require) => {
                    let components = require('../components');
                    cb(null, components);
                });

            } else {
                cb(null, require('../components'));
            }

        }
    }
}