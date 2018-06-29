/**
 * Created by Young on 2018/6/16.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


export default class Waiting extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    登录使用手机号: {this.props.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                    登录使用密码: {this.props.userPassword}
                </Text>

                <Text style={styles.bigTextPrompt}
                      onPress={() => this.onBackPressed()}>
                    返回
                </Text>
            </View>
        );
    }

    onBackPressed() {
        this.props.onGoBackPressed();
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    textPromptStyle: {
        fontSize: 20
    },
    bigTextPrompt: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
});

// 属性确认
Waiting.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    userPassword: PropTypes.string
};