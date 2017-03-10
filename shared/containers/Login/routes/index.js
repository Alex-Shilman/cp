module.exports = store => {
    return {
        path: 'login',
        getComponent(location, cb){
            (process.env.BROWSER)
                ?   require.ensure([], require => {
                        cb(null,  require('../components').default);
                    })
                :   cb(null,  require('../components').default);
        }
    }
}