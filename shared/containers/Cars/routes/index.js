module.exports = (store) => {
    return {
        path: 'search-results/:oldnewId',
        getComponent(location, cb){
            if (process.env.BROWSER){
                require.ensure([], (require) => {
                    cb(null,  require('../components').default);
                });
            }else{
                cb(null,  require('../components').default);
            }
        }
    }
}