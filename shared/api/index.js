import ApiClient    from './ApiClient';
import config       from '../config';
import CarsAPI      from './Cars';
import UserAPI      from './User';
import ReviewsApi   from './Reviews';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix){
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        cars    : new CarsAPI({apiClient: api}),
        user    : new UserAPI({apiClient: new ApiClient({ prefix: config.appRootUrl }) }),
        reviews : new ReviewsApi({apiClient: api})
    };
}