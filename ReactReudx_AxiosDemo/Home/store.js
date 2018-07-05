import {createStore, applyMiddleware} from 'react-redux';
import thunk from 'react-thunk'
import reducer from "./Reducers/reudcers";

const store = createStore(reducer, applyMiddleware(thunk));
export default store;
