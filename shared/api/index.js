import ApiClient    from './ApiClient';
import CarsAPI      from './Cars';

export default function ({ apiPrefix } = {}) {
    if (!apiPrefix){
        throw new Error('[apiPrefix] required');
    }

    const api = new ApiClient({ prefix: apiPrefix });

    return {
        cars: new CarsAPI({ apiClient: api })
    };
}