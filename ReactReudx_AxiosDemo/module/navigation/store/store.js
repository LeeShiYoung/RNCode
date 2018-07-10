
import {createStore, applyMiddleware } from 'redux';
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";

import appReducer from "../reducer/reducer";
import {middleware} from "../Navigator";

const store = createStore(
    appReducer,
    applyMiddleware(middleware)
);

export default store;

