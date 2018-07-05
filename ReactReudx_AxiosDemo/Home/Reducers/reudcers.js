import {FETCH_DATA, FETCH_FAILED, FETCH_SUCCESS} from "../Actions/action_types";

const initialState = {
    stat: 'loading',
    error: null,
    data: [],
};

const fetch = (state = initialState, action) => {
   switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                stat: 'loading',
                error: null,
                data: [],
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                stat: 'success',
                error: null,
                data: action.date,
            };
        case FETCH_FAILED:
            return {
                ...state,
                stat: 'failed',
                error: action.error,
                data: [],
            };
        default:
            return state;
    }
};

export default fetch;