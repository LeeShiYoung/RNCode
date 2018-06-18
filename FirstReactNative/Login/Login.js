/**
 * Created by Young on 2018/6/16.
 */

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    Platform,
    BackHandler
} from 'react-native';

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
    }


    updatePw(inputedPw) {
        this.setState({inputedPw});
    }

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.textInputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(inputedNum) => this.setState({inputedNum})}/>

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
            </View>
        );
    }

    userPressConfirm() {
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
        padding: 12.5
    }
});

