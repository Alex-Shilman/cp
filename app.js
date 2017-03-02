'use strict';

import express              from 'express';
import path                 from 'path';
//import favicon            from 'serve-favicon';
import logger               from 'morgan';
import helmet               from 'helmet';
//import cookieParser         from 'cookie-parser';
//import bodyParser           from 'body-parser';
import mongoose             from 'mongoose';
import isomorphic           from './server/routes/isomorphic';
import webpack              from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import passport             from 'passport';
import configPassport       from './server/config/passport';
import configExpress        from './server/config/express';
import connectDB            from './server/config/db';

const app = express();
const env = process.env.NODE_ENV || 'development';


/*HotModuleReplacement*/
if(env === 'development'){
    (function() {
        const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config');
        const compiler = webpack(webpackConfig);

        app.use(webpackDevMiddleware(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        }));

        app.use(webpackHotMiddleware(compiler, {
            log: console.log
            /*,
             path: '/__webpack_hmr',
             heartbeat: 10 * 1000
             */
        }));
    })();
}

// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(helmet());
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Mongoose */
connectDB(mongoose);
mongoose.connection.on('error', console.error);
mongoose.connection.on('disconnected', connectDB);

configExpress(app, passport);
configPassport(app, passport);

/* Routes */
app.use('/auth', require('./server/routes/auth')(app, passport));
app.use('/api/v1', require('./server/routes/api')(app));
app.use(isomorphic);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
