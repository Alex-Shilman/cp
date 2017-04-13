import express      from 'express';
import routesFunc   from '../routes';
const router        = express.Router();
const myRoutes      = routesFunc();

const routes = (app) => {
    router.get('/cars/:ageId', myRoutes.cars.show.bind(myRoutes.cars));
    router.get('/edmonds/reviews', myRoutes.edmonds.show.bind(myRoutes.edmonds));

    return router;
}

module.exports = routes;