import {
    FETCH_ACCOUNT_START,
    FETCH_ACCOUNT_SUCCESS,
    FETCH_ACCOUNT_FAILURE
} from "../actions";
const initialState = {
    account: [],
    isFetching: false,
    error: ""
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACCOUNT_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_ACCOUNT_SUCCESS:
            return {
                ...state,
                account: action.payload,
                isFetching: false,
                error: ""
            };
        case FETCH_ACCOUNT_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default accountReducer;