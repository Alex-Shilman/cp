import ApiClient    from './ApiClient';
import config       from '../config';
import CarsAPI      from './Cars';
import UserAPI      from './User';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix){
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        cars: new CarsAPI({ apiClient: new ApiClient({ prefix: apiPrefix }) }),
        user: new UserAPI({ apiClient: new ApiClient({ prefix: config.appRootUrl }) })
    };
}