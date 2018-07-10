/**
 * Created by Young on 2018/7/10.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

export default class DetailView extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.containter}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'center',
    }
});