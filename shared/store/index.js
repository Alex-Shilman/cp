import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import {
    showCarsReducer, userReducer, edmondsReviewsReducer
} from '../reducers';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

export function createReducer(asyncReducers) {
    return combineReducers({
        form    : formReducer,
        cars    : showCarsReducer,
        user    : userReducer,
        reviews : edmondsReviewsReducer,
        ...asyncReducers
    });
}

export default function configureStore(initialState) {
    const isDevTool = (process.env.BROWSER && process.env.NODE_ENV !== 'production' && window.devToolsExtension);
    let store = createStoreWithMiddleware(
        createReducer(),
        initialState,
        isDevTool ? window.devToolsExtension() : undefined
    );
    store.asyncReducers = {};
    return store;
}

export function injectAsyncReducer(store, name, asyncReducer) {
    store.asyncReducers[name] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
}