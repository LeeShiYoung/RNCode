/**
 * Created by Young on 2018/7/3.
 */

import * as types from './Action'

export const addTodo = num => ({
    type: types.ADD_NUm,
    num
});

export const reduceTodo = num => ({
    type: types.REDUCE_NUM,
    num
});

export const updateText = text => ({
    type: types.UPDATE_TEXT,
    text
});

