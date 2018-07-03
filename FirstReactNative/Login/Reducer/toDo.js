/**
 * Created by Young on 2018/7/3.
 */

import * as types from '../Action/Action'

const initState = {
    text: ''
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

export default todos;
