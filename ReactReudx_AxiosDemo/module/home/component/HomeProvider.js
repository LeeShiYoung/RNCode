/**
 * Created by Young on 2018/7/10.
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import HomeView from './HomeView';
import store from '../store/store';


export default class HomeProvider extends Component {

    render() {
        console.log(this.props.navigation);
        return (
            <Provider store={store}>
                <HomeView pushToDetail={() => {
                    console.log('🍎🍎🍎🍎');
                    this.props.navigation.push('Detail')
                }}/>
            </Provider>
        );
    }
}


HomeProvider.navigationOptions = {
    title: '首页',
};