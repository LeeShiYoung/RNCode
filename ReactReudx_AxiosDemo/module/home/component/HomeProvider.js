/**
 * Created by Young on 2018/7/10.
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import HomeView from './HomeView';
import store from '../store/store';


export default class HomeProvider extends Component {

    render() {
        return (
            <Provider store={store}>
                <HomeView/>
            </Provider>
        );
    }
}