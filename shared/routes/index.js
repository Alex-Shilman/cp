import App from '../Components/App';
import Home from '../Components/Home';

export default (store) => {
    return {
        path: '/',
        component: App,
        indexRoute: {
            component: Home
        },
        childRoutes: []
    }
}

