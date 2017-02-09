import express    from 'express';
import routesFunc from './lib/routes';
const router = express.Router();
const routes = routesFunc();

router.get('/cars/:id', routes.cars.show.bind(routes.cars);

export default router;