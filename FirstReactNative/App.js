/**
 * Created by Young on 2018/6/16.
 */

import React, { Component } from 'react';
import {
    BackHandler,
    Platform
} from 'react-native'

import Login from './Login/Login'
import Waiting from './Login/Waiting'

export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            currentScene: 'Login',
            phoneNum: '',
            userPw: ''
        };

        this.handleBackSignal = this.handleBackSignal.bind(this);
        this.onLoginPressed = this.onLoginPressed.bind(this);
    }
    render() {

        if (this.state.currentScene === 'Login') {
            return (
                <Login onPressed={this.onLoginPressed}/>
        );
        } else {
            return <Waiting phoneNumber={this.state.phoneNum}
            userPassword={this.state.userPw}
            onGoBackPressed={this.handleBackSignal}/>
        }
    }

    onLoginPressed(number, password) {
        this.setState({
            currentScene: 'Waiting',
            phoneNum: number,
            userPw: password
        })
    }

    handleBackSignal() {
        if (this.state.currentScene === 'Waiting') {
            this.setState({currentScene: 'Login'});
            return true;
        }
        return false;
    }

    componentDidMount() {
        if ( Platform.OS === 'android' ) {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackSignal);
        }
    }

}
