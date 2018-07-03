/**
 * Created by Young on 2018/7/3.
 */

import React, {Component} from 'react';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import ReduxComponent from './ReduxCompent';
import rootReducers from "./Reducer";

export default class ReduxDemo extends Component {
    render() {

        let store = createStore(rootReducers);
        return(
            <Provider store={store}>
                <ReduxComponent/>
            </Provider>
        )
    }
}

