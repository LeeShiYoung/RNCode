/**
 * Created by Young on 2018/7/3.
 */

import {combineReducers} from 'redux';
import todos from './toDo';
import counter from './counter';

const rootReducers = combineReducers({
   todos,
    counter
});

export default rootReducers;