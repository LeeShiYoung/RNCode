/**
 * Created by Young on 2018/7/3.
 */

import {combineReducers} from 'redux';
import {todos, counter} from './toDo';

const rootReducers = combineReducers({
   todos,
    counter
});

export default rootReducers;