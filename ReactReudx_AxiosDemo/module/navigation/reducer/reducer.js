import {combineReducers } from 'redux';
import {AppNavigator} from "../Navigator";
import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
    navReducer,
});

export default appReducer;