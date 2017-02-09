import {
    LOAD_CARLIST_REQUEST,
    LOAD_CARLIST_SUCCESS,
    LOAD_CARLIST_FAIL
} from '../actions/carList';

const DEFAULT_STATE = {
    data      : null,
    isLoading : false,
    error     : null
}

export const showCarsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case LOAD_CARLIST_REQUEST:{
            return {
                ...state,
                isLoading: true
            }
        }

        case LOAD_CARLIST_SUCCESS:{
            return{
                ...state,
                data      : action.payload,
                isLoading :false,
                error     :null
            }
        }

        case LOAD_CARLIST_FAIL:{
            return {
                ...state,
                isLoading : false,
                error     : action.error,
                data      : null
            }
        }

        default: {
            return state;
        }
    }
}