import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { combineReducers } from 'redux';
import reducer from './Reducers/reducer';

const store = createStore(combineReducers({reducer}), applyMiddleware(thunk));
export default store;
