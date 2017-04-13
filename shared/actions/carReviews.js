import api from '../apiSingleton';
export const LOAD_CARREVIEWS_REQUEST = 'LOAD_CARREVIEWS_REQUEST';
export const LOAD_CARREVIEWS_SUCCESS = 'LOAD_CARREVIEWS_SUCCESS';
export const LOAD_CARREVIEWS_FAIL    = 'LOAD_CARREVIEWS_FAIL';



export const loadCarReviews = ({params = {}, query = {}}) => {
    return (dispatch, getState) => {

        dispatch({ type: LOAD_CARREVIEWS_REQUEST});

        return api.reviews.show(params, query).then(data => {
           dispatch({
               type: LOAD_CARREVIEWS_SUCCESS,
               payload: data
           });
        }).catch(error => {
            dispatch({
                type: LOAD_CARREVIEWS_FAIL,
                error
            })
        });
    }
}
