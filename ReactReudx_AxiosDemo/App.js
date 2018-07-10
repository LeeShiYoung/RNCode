/**
 * Created by Young on 2018/7/10.
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Navigator} from "./module/navigation/Navigator";

import store from "./module/navigation/store/store";

export default class App extends Component {
    render() {
        console.log(store.getState());
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        ) ;
    }
}
