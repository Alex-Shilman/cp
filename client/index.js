import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import configureStore from '../shared/store';
import createRootRoute from '../shared/routes';
const persistedState = loadState();
const initialState = window.__INITIAL_STATE__ || {};

let store = configureStore({...initialState, ...persistedState});
/**
 *   list all state to save in localStorage
 **/
store.subscribe(throttle(() => {
    const {
        auth_router
    } = store.getState();

    saveState({
        auth_router
    });
}, 1000));


    render(
        <Provider store={store}>
            <Router history={browserHistory} routes={createRootRoute(store)}></Router>
        </Provider>,
        document.getElementById('cp-App-Viewport')
    );

