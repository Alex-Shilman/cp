import api from '../apiSingleton';
export const LOGIN          = 'LOGIN';
export const LOGIN_SUCCESS  = 'LOGIN_SUCCESS';
export const LOGIN_ERROR    = 'LOGIN_ERROR';
export const SIGNUP         = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR   = 'SIGNUP_ERROR';
export const LOGOUT         = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR   = 'LOGOUT_ERROR';

export const signup = (params = {}, query = {}) => {

    return (dispatch, getState) => {
        dispatch({ type: SIGNUP });

        return api.user.signup(params, query).then(data => {
           dispatch({
               type: SIGNUP_SUCCESS,
               payload: data
           });
        }).catch(error => {
            dispatch({
               type: SIGNUP_ERROR,
               error
            });
        });
    }
}

export const login = ({params = {}, query = {}}) => {
    return (dispatch, getState) => {

    }
}