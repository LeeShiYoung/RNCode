import {FETCH_DATA, FETCH_FAILED, FETCH_SUCCESS} from "./action_types";
import axios from 'axios';

const fetchingApi = () => {
    return dispatch => {
        dispatch(fetchData());
        axios.get('https://v.juhe.cn/toutiao/index?type=top&key=c470dae6931d85934a3ee3ec566485ef')
            .then(response => {
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchFailed(error));
            });
    }
};

export const fetchData = () => ({
    type: FETCH_DATA,
    stat: 'loading',

});

export const fetchSuccess = data => ({
    type: FETCH_SUCCESS,
    stat: 'success',
    data
});

export const fetchFailed = error => ({
    type: FETCH_FAILED,
    stat: 'failed',
    error
});

export default fetchingApi;