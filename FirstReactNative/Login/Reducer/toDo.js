/**
 * Created by Young on 2018/7/3.
 */

import {UPDATE_TEXT, ADD_NUm, REDUCE_NUM} from "../Action/Action";

const initState = {
    text: '',
    num: 0
};

const todos = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_TEXT:
            return {
                ...state,
                text: action.text
            };
        default:
            return {
                ...state,
            }
    }
};

const counter = (state = initState, action) => {
    switch (action.type) {
        case ADD_NUm:
            return {
                ...state,
                num: action.num,
            };

        case REDUCE_NUM:
            return {
                ...state,
                num: action.num,
            };

        default:
            return {
                ...state,
            }
    }
};
export {todos, counter};
