import {
    LOAD_CARREVIEWS_REQUEST,
    LOAD_CARREVIEWS_SUCCESS,
    LOAD_CARREVIEWS_FAIL,
} from '../actions/carReviews';

const DEFAULT_STATE = {
    data        : null,
    isLoading   : true,
    error       : null
}

export const edmondsReviewsReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type){
        case LOAD_CARREVIEWS_REQUEST: {
            debugger;
            return {
                ...state,
                isLoading: true
            }

        }

        case LOAD_CARREVIEWS_SUCCESS: {
            debugger;
            return {
                ...state,
                data        : action.payload,
                isLoading   : false,
                error       : null
            }
        }

        case LOAD_CARREVIEWS_FAIL: {
            debugger;
            return {
                ...state,
                isLoading   : false,
                error       : action.error,
                data        : null
            }
        }


        default: {
            return state;
        }
    }
}