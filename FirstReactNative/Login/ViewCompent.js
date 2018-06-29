/**
 * Created by Young on 2018/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class ViewCompent extends Component {
    render() {
        return (
            <View style={styles.containter}>

                <Text style={styles.textStyle}>
                    我是Text
                </Text>
                <Image style={styles.imageStyle}
                       source={{uri: 'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}}
                       onLoad={(event) => {console.log(event.timeStamp)}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        backgroundColor: 'blue',
        marginTop: 54
    },
    imageStyle: {
        marginTop: 60,
        width: 375,
        height: 200,
        backgroundColor: 'red',
        resizeMode: 'center'
    }
});
