/**
 * Created by Young on 2018/6/16.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Platform,
    Alert,
    StatusBar
} from 'react-native';
import Utilities from '../Utilities/Utilities'

let marginOrWidth = Dimensions.get('window').width * 0.05;

export default class Login extends Component {

    static myStaticObject = 'init Value';   // 静态变量
    static myStaticFunction() {
        console.log('my static method is called');
    } // 静态函数

    constructor(props) {
        super(props);

        this.property1 = '';
        this.property2 = '';  // 成员变量

        this.state = {
            inputedNum: '',
            inputedPw: ''

        };

        this.updatePw = this.updatePw.bind(this);
        this.optionlSelected = this.optionlSelected.bind(this);
    }

    updatePw(inputedPw) {
        this.setState({inputedPw});
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar networkActivityIndicatorVisible={false}
                           barStyle={'dark-content'}
                           translucent={true}/>
                <TextInput ref='textIpunt'
                           value={'我是默认值'}
                           style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(inputedNum) => this.setState({inputedNum})}
                           underlineColorAndroid={'gray'}/>

                <Text style={styles.textPromptStyle}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>

                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入密码'}
                           secureTextEntry={true}
                           onChangeText={this.updatePw}/>

                <Text style={styles.bigTextPrompt}
                      onPress={ () => this.userPressConfirm()}>
                    确定
                </Text>
                <Text style={styles.bigTextPrompt}
                      onPress={this.userPressAddressBook()}>
                    通讯录
                </Text>

                <Text style={styles.bigTextPrompt}
                      onPress={() => this.props.onPressToView()}>
                    View
                </Text>

                <Text style={styles.bigTextPrompt}
                      onPress={() => this.props.onPressAndroidButton()}>
                    安卓button
                </Text>
            </View>
        );
    }

    userPressConfirm() {
        Alert.alert(
            '提示',
            '确认登录吗？',
        [
            {text: '确定', onPress: this.optionlSelected }
                ]
        );
    }

    optionlSelected() {
        this.refs.textIpunt.measure((fx, fy, width, height, px, py) => {
            console.log(fx);
            console.log(fy);
            console.log(width);
            console.log(height);
            console.log(px);
            console.log(py);
        });
        this.props.onPressed(this.state.inputedNum, this.state.inputedPw)
    }

    userPressAddressBook() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    textInputStyle: {
        margin: marginOrWidth,
        backgroundColor: 'gray',
        ...Platform.select({
            ios: {
                fontSize: 20
            },
        }),
        ...Utilities.ifIphoneX({
            marginTop: 54,
        }, {
            marginTop: 30,
        })
    },
    textPromptStyle: {
        margin: marginOrWidth,
        fontSize: 20
    },
    bigTextPrompt: {
        margin: marginOrWidth,
        backgroundColor: 'blue',
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        height: 40,
        padding: 12.5,
        elevation: 50
    }
});

Login.propTypes = {
    onPressToView: PropTypes.func,
    onPressAndroidButton: PropTypes.func
};