/**
 * Created by Young on 2018/7/2.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    ListView
} from 'react-native';
import Utilities from "../Utilities/Utilities";
import axios from 'axios';

export default class ListCompent extends Component {

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
        this.fetchData();
    }
    render() {
        return (
            <ListView style={styles.listStyle}
                      dataSource={this.state.dataSource}
                      renderRow={(rowData) => <Text style={styles.textStyle}>{rowData}</Text>}
            />
        );
    }

    fetchData() {
        axios
            .get('https://v.juhe.cn/toutiao/index?type=top&key=c470dae6931d85934a3ee3ec566485ef')
            .then(response => this.mapToModel(response.data.result))
            .catch(error => console.log(error));
    }

    mapToModel({stat, data}) {
        console.log(stat);
        console.log(data);
        data.map(({author_name, date}) => {
            console.log(author_name);
            console.log(date);
        });
    }
}

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
    },
    listStyle: {
        // width: 375,
        backgroundColor: 'blue',
        ...Utilities.ifIphoneX({
            marginTop: 44
        }, {
            marginTop: 20
        })
    },
    textStyle: {
        width: 200,
        height: 44,
        backgroundColor: 'red',
        textAlign: 'center',
        fontSize: 18
    }

});