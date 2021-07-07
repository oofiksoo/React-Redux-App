import axios from "axios";

export const FETCH_ACCOUNT_START = "FETCH_ACCOUNT_START";
export const FETCH_ACCOUNT_SUCCESS = "FETCH_ACCOUNT_SUCCESS";
export const FETCH_ACCOUNT_FAILURE = "FETCH_ACCOUNT_FAILURE";

export const getAccount = () => dispatch => {
    const apikey = "zpfFvWBRqut0E0FJoQwGwxzReN4SYgMJ";
    const accountUrl = `https://api.shodan.io/api-info?key=${apikey}`;
    dispatch({ type: FETCH_ACCOUNT_START });
    axios
        .get(accountUrl)
        .then(res => {
            dispatch({ type: FETCH_ACCOUNT_SUCCESS, payload: res.data.value });
        })
        .catch(err => {
            dispatch({ type: FETCH_ACCOUNT_FAILURE, payload: err.response });
        });
};