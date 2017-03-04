import React from 'react';
import { renderToString } from 'react-dom/server';
import serializeJs  from 'serialize-javascript';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import escapeHTML from 'lodash/escape';
import configureStore from '../../shared/store';
import createRootRoute from '../../shared/routes';
import clientConfig from '../../shared/config';
import { fetchComponentsData } from '../utils';

module.exports = (req, res) => {
    console.log('Isomorphic');
    if (req.user) {
        console.log('User Is', req.user);
    }
    let store = configureStore({user: req.user});
    let routes = createRootRoute(store);
    const host = req.headers.host;
    match({
        routes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {


        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            res.status(500).send(error.message);
        } else if (!renderProps) {
        res.status(404).send('Not found');
        } else {
            fetchComponentsData({
                dispatch  : store.dispatch,
                components: renderProps.components,
                params    : renderProps.params,
                query     : renderProps.query
        }).then(() => {
            const initialState = store.getState();
            console.log('initialState', initialState);
            const componentHtml = renderToString(
                <Provider store={store}>
                    <RouterContext { ...renderProps } />
                </Provider>
            );
            return renderHTML(componentHtml, host, initialState, clientConfig);
        }).then(html => {
            //console.log('----------');
            //console.log('ComponentHtml', componentHtml);
            res.set('Content-Type', 'text/html');
            res.send(html);
        }).catch(err => {
            console.error('Error', err.stack);
            res.end(err.message);
        });

    }
});
}

function renderHTML(componentHTML, host, initialState, config) {
    return `
		<!DOCTYPE html>
		<html>
		<head>
		  <meta charset="utf-8">
		  <meta http-equiv="X-UA-Compatible" content="IE=edge">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
		  <meta name="description" content="">
		  <meta name="author" content="">
		  <title>My title</title>
		  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:400,100,300,500,700,900&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
		  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
		  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
          <link rel="stylesheet" href="//code.getmdl.io/1.1.3/material.blue-red.min.css" />
          <link rel="stylesheet" href="//cdn.materialdesignicons.com/1.2.65/css/materialdesignicons.min.css"> 
		  <link rel='stylesheet' href="//${host}/build/main.css" />
		  <link rel='stylesheet' href="//${host}/css/style.css" />
		</head>
		<body>
		  <div id="cp-App-Viewport">${componentHTML}</div>
		  <script type="application/javascript">
		    window.__CONFIG__        = ${serializeJs(config, { isJSON: true })};
		    window.__INITIAL_STATE__ = ${serializeJs(initialState, { isJSON: true })};
		  </script>
		  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
		  <script type="text/javascript" src="//storage.googleapis.com/code.getmdl.io/1.1.3/material.min.js"></script>
		  <script src="//${host}/build/shared.js"></script>
		  <script src="//${host}/build/main.js"></script>
		  
		</body>
		</html>
	`;
}