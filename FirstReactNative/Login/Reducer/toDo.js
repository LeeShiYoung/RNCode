/**
 * Created by Young on 2018/7/3.
 */

import * as types from '../Action/Action'

const initState = {
    text: '',
    num: 0
};

const todos = (state = initState, action) => {
    switch (action.type) {
        case types.UPDATE_TEXT:
            state.text = action.text;
            return Object.assign({}, state);

        default:
            return Object.assign({}, state);

    }
};

const counter = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_NUm:
            state.num = action.num;
            return Object.assign({}, state);

        case types.REDUCE_NUM:
            state.num = action.num;
            return Object.assign({}, state);

        default:
            return Object.assign({}, state);
    }
};
export {todos, counter};
