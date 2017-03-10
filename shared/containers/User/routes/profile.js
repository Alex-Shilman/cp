module.exports = store => {
    return {
        path: 'profile',
        getComponents(location, cb){
            (process.env.BROWSER)
                ?   require.ensure([], require => {
                        cb(null,  {
                            content: require('../components/Profile').default,
                            sidebar: require('../components/Profile/Sidebar').default
                        });
                    })
                :   cb(null,  {
                        content: require('../components/Profile').default,
                        sidebar: require('../components/Profile/Sidebar').default
                    });
        }
    }
}