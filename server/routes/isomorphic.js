import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';
import escapeHTML from 'lodash/escape';
import configureStore from '../../shared/store';
import createRootRoute from '../../shared/routes';


module.exports = (req, res) => {
    console.log('Isomorphic');
    let store = configureStore();
    let routes = createRootRoute(store);
    const host = req.headers.host;
    match({
        routes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {

        /*
         console.log('Routes', routes);
         console.log('----------');
         console.log('Store', store);
         console.log('----------');
         console.log('RenderProps', renderProps);
         */
        if (redirectLocation) {
            res.redirect(301, redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            res.send(500, error.message);
        } else if (!renderProps) {
        res.send(404, 'Not found');
    } else {
        const componentHtml = renderToString(
            <Provider store={store}>
                <RouterContext { ...renderProps } />
            </Provider>
    );
        //console.log('----------');
        //console.log('ComponentHtml', componentHtml);
        res.set('Content-Type', 'text/html');
        res.end(renderHTML(componentHtml, host));
    }
});
}

function renderHTML(componentHTML, host) {
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
		  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
		  <script src="//storage.googleapis.com/code.getmdl.io/1.1.3/material.min.js"></script>
		  <script src="//${host}/build/shared.js"></script>
		  <script src="//${host}/build/main.js"></script>
		  
		</body>
		</html>
	`;
}