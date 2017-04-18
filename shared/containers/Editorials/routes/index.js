module.exports = store => {
    return {
        path: 'editorials/:year/:make/:model',
        getComponent(location, cb){
            (process.env.BROWSER)
                ? require.ensure([], require => cb(null,  require('../components/Reviews').default))
                : cb(null,  require('../components/Reviews').default);
        }
    }
}