/**
 * Created by Young on 2018/7/5.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import AsyncStorage from 'AsyncStorage';

const localData = require('./localData');


export default class LocalDataView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }


    componentDidMount() {

        const {name, project} = localData;

        AsyncStorage.setItem('name', JSON.stringify(localData))
            .then(data => {
                console.log(data + '🍎');
            })
            .catch(error => {
                console.log(error + '🍎');
            });
    }


    render() {
        const {name, project} = localData;

        return (
            <View style={styles.container}>
                <Text>
                    { name + '🍎' + project}
                </Text>

                <Text onPress={() => this.getLocalData()}>
                    取出来
                </Text>

                <Text style={styles.text}>
                    {this.state.text}
                </Text>
            </View>
        );
    }

    getLocalData() {
        AsyncStorage.getItem('name')
            .then(data => {
                console.log(data);
                this.setState({text: data});
            })
            .catch(error => {
                console.log(error);
            })

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: 'blue',
        width: 355,
        height: 100

    }
});
