import api from '../apiSingleton';
export const LOAD_CARLIST_REQUEST = 'LOAD_CARLIST_REQUEST';
export const LOAD_CARLIST_SUCCESS = 'LOAD_CARLIST_SUCCESS';
export const LOAD_CARLIST_FAIL    = 'LOAD_CARLIST_FAIL';

export const loadCarList = ({params = {}, query = {}}) => {
    return (dispatch, getState) => {

        const { cars: { data } } = getState();
        if (data && data.cars) return;

        dispatch({ type: LOAD_CARLIST_REQUEST });

        return api.cars.show(params, query).then(data => {
            dispatch({
                type: LOAD_CARLIST_SUCCESS,
                payload: data
            });
        }).catch(error => {
            dispatch({
                type: LOAD_CARLIST_FAIL,
                error
            });
        });
    }
}