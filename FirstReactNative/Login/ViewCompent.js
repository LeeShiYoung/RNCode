/**
 * Created by Young on 2018/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button
} from 'react-native';

export default class ViewCompent extends Component {
    render() {
        return (
            <View style={styles.containter}>

                <Text style={styles.buttonStyle}>
                    我是Text
                </Text>
                <Image style={styles.imageStyle}
                       source={{uri: 'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}}
                       onLoad={(event) => {console.log(event.timeStamp)}}/>
                <Button style={styles.buttonStyle}
                        title={'点我'}
                        onPress={(aaa) => {console.log(aaa)}}/>
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
        marginTop: 20,
        width: 375,
        height: 200,
        backgroundColor: 'red',
        resizeMode: 'center'
    },
    buttonStyle: {
        marginTop: 50,
        backgroundColor: 'red',
        width: 100,
        height:50,
        borderColor: 'blue',
        borderWidth: 1
    }
});
