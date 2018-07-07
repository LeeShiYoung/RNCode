/**
 * Created by Young on 2018/7/5.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import PropTypes from 'prop-types'
import fetchingApi from "./Actions/action";
import {connect} from 'react-redux';

class HomeView extends Component {
    constructor(props) {
        super(props);

        console.log(connect(mapStateToProps, {fetchingApi})(HomeView));
    }

    componentDidMount() {
        this.props.fetchingApi();
    }

    render() {
        const {stat, error, data} = this.props.state;

        if (stat === 'loading') {
            return <View style={styles.containter}>
                <Text>
                    加载中...
                </Text>
            </View>
        }
        if (stat === 'success') {
            return <View style={styles.containter}>
                <Text>
                    {JSON.stringify(data)}
                </Text>
            </View>
        }
        if (stat === 'failed') {
            return <View style={styles.containter}>
                <Text>
                    出错了：{error}
                </Text>
            </View>
        }


    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


HomeView.propTypes = {
    fetchingApi: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    state: state.reducer
});

export default connect(mapStateToProps, {fetchingApi})(HomeView);