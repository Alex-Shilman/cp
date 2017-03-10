import User from '../components';

module.exports = store => {
    return {
        path: 'user',
        component: User,
        childRoutes: [
            require('./profile')(store)
        ]
    }
}