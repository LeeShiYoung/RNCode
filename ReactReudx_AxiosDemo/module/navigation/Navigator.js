/**
 * Created by Young on 2018/7/10.
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator
} from 'react-navigation-redux-helpers';
import HomeProvider from "../home/component/HomeProvider";
import DetailView from "../detail/component/DetailView";

const AppNavigator = createStackNavigator({
    Home: {screen: HomeProvider},
    Detail: {screen: DetailView,},
}, {
    initialRouteName: 'Home',
});

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const AppWithNavigationState = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
    state: state.navReducer,
});

const Navigator = connect(mapStateToProps)(AppWithNavigationState);

export { AppNavigator, Navigator, middleware };