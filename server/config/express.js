import session      from 'express-session';
import bodyParser   from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet       from 'helmet';
import logger       from 'morgan';
import connectRedis from 'connect-redis';
import redis        from 'redis';
import flash        from 'express-flash';
import config       from '../../etc/server-config.json';
import { fork }     from 'child_process';

export default function (app, passport) {
    app.use(helmet());
    app.use(helmet.hidePoweredBy());
    app.use(logger('dev'));
    app.set('view cache', false);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    app.enable('trust proxy');

    const RedisStore = connectRedis(session);
    const redisClient = redis.createClient();

    redisClient.on('connect'     , log('redis connected'));
    redisClient.on('ready'       , log('redis ready'));
    redisClient.on('reconnecting', log('redis reconnecting'));
    redisClient.on('error'       , log('redis error'));
    redisClient.on('end'         , log('redis end'));

    function log(type){
        return (err) => {
            console.log(`${type} ${!!err ? ',' + err : ''}`);
        }
    }
    app.use(session({
        resave: true,
        ephemeral: true,
        saveUninitialized: true,
        key: config.session.key,
        secret: config.session.secret,
        cookie: { httpOnly: true, secure: false },
        store: new RedisStore({
            host: config.session.store.host,
            port: config.session.store.port,
            ttl: config.session.store.ttl,
            client: redisClient
        })
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    /*start child process*/
    const child_process_1 = fork(`${__dirname}/../services/edmonds/populate_redis`, [redisClient]);
    child_process_1.send({
        type: 'editorials',
        params: {
            year: 2015,
            make: "audi",
            model: "a3",
            view: "basic",
            fmt:  "json"
        }
    });

    child_process_1.send({
        type: 'media',
        params: {
            year: 2015,
            make: "audi",
            model: "a3",
            view: "basic",
            fmt:  "json"
        }
    });


}


