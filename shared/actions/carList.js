import api from '../apiSingleton';
export const LOAD_CARLIST_REQUEST = 'LOAD_CARLIST_REQUEST';
export const LOAD_CARLIST_SUCCESS = 'LOAD_CARLIST_SUCCESS';
export const LOAD_CARLIST_FAIL    = 'LOAD_CARLIST_FAIL';

export const loadCarList = ({params = {}, query = {}}) => {
    return (dispatch, getState) => {
        debugger;
        const { cars: { data } } = getState();
        debugger;
        if (data && data.cars) return;

        dispatch({
            type: LOAD_CARLIST_REQUEST
        });
        debugger;
        return api.cars.show(params, query).then(data => {
            debugger;
            dispatch({
                payload: data,
                type: LOAD_CARLIST_SUCCESS
            });
        }).catch(error => {
            dispatch({
                type: LOAD_CARLIST_FAIL,
                error
            });
        });
    }
}