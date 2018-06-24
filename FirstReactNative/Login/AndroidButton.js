/**
 * Created by Young on 2018/6/24.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    TouchableNativeFeedback
} from 'react-native';

export default class AndroidButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback backgroundColor={TouchableNativeFeedback.Ripple('red', false)}>
                    <View style={styles.button}/>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    button: {
        width: 300,
        height: 70,
        backgroundColor: 'grey'
    }

});
