/**
 * Created by Young on 2018/7/3.
 */

import { UPDATE_TEXT, ADD_NUm, REDUCE_NUM } from "../Action/Action";

export const addTodo = num => ({
    type: ADD_NUm,
    num
});

export const reduceTodo = num => ({
    type: REDUCE_NUM,
    num
});

export const updateText = text => ({
    type: UPDATE_TEXT,
    text
});

