/**
 * Created by Young on 2018/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput
} from 'react-native';

export default class ViewCompent extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            viewColor: 'yellow'
        };
        this.changeColor = this.changeColor.bind(this);
    }
    render() {
        return (

            <View style={styles.containter}>

                <TextInput style={styles.textStyle}
                           onFocus={(event) => {console.log(event)}}
                           multiline={true}
                           onLayout={(layout) => { console.log(layout.timeStamp) }}
                           defaultValue={'默认值'}/>

                <Image style={styles.imageStyle}
                       source={{uri: 'https://www.google.com.hk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'}}
                       onLoad={(event) => {console.log(event.timeStamp)}}/>

                <Text style={[styles.viewStyle, {backgroundColor: this.state.viewColor}]}
                      onPress={this.changeColor }>
                    能触摸吗？？？
                </Text>

                <Text style={[{fontSize: 20, textAlign: 'center'}, styles.moreTextStyle]}>
                    我是20号字体
                    <Text style={{fontWeight: 'bold'}}>
                        {'\r\n'}我是20号加粗字体
                        <Text style={{color: 'red'}}>
                            {'\r\n'}我是20号加粗红色字体
                        </Text>
                    </Text>
                </Text>
            </View>
        );
    }

    changeColor() {
        console.log('event.....');
        if (this.state.viewColor === 'yellow') {
            this.setState({
                viewColor: 'red'
            })
        } else {
            this.setState({
                viewColor: 'yellow'
            })
        }

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
        marginTop: 54,
        width: 100,
        // height: 50
    },
    imageStyle: {
        marginTop: 60,
        width: 375,
        height: 200,
        resizeMode: 'center'
    },
    viewStyle: {
        marginTop: 10,
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        textDecorationLine: 'underline'
    },
    moreTextStyle: {
        marginTop: 10,
        textShadowOffset: {width: 5, height: 5},
        textShadowColor: 'blue',
        textShadowRadius: 2
    }
});
