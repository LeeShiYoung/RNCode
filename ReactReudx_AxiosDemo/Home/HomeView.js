/**
 * Created by Young on 2018/7/5.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import fetchingApi from "./Actions";
import {connect} from 'react-redux';

class HomeView extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {data} = this.props.datas;
        return (
            <View style={styles.containter}>
                <Text style={styles.text}>
                    {data.toString()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        margin: 0,
        marginTop: 54,
    }
});

const mapStateToProps = state => {
    datas: state.data;
};

const mapDispatchToProps = dispathch => {
    fetchData: dispathch(fetchingApi());
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);