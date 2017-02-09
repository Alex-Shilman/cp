import App from '../containers/App';
import Home from '../components/Home';


export default (store) => {
    return {
        path: '/',
        component: App,
        indexRoute: {
            component: Home
        },
        childRoutes: [
            require('../containers/Cars/routes')(store),
            require('../containers/NotFound/routes')(store)
        ]
    }
}

