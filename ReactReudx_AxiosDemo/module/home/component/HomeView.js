/**
 * Created by Young on 2018/7/10.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ListView,
} from 'react-native';
import PropTypes from 'prop-types'
import fetchingApi from "../action/action";
import {connect} from 'react-redux';
import HomeCell from "./HomeCell";


class HomeView extends Component {

    constructor(props) {
        super(props);
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
            return <ListView style={{backgroundColor: 'white'}}
                             dataSource={this.dataSource.cloneWithRows(data)}
                             renderRow={(rowData) => <HomeCell data={rowData}
                                                               didSelected={() => console.log(this.props.navigation)}/>
                             }/>

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

HomeView.navigationOptions = {
    title: '首页',
};

HomeView.propTypes = {
    fetchingApi: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    state: state.reducer
});

export default connect(mapStateToProps, {fetchingApi})(HomeView);