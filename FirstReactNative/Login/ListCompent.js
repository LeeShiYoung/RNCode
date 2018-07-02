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

export default class ListCompent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.data = [{key: 'a'}, {key: 'b'}];
    //
    //    //  this.count = 0;
    //    // let timer = setInterval(() => {
    //    //     this.count++;
    //    //     if (this.count > 10) {
    //    //         clearInterval(timer);s
    //    //     }
    //    //     this.data.push({'key': 'add'});
    //    //     console.log('------刷新');
    //    //  }, 1);
    //
    //     this.state = {
    //        data: this.data
    //     };
    //
    //     console.log(Date());
    //     setTimeout(() => {
    //         console.log('啥时候执行' + Date());
    //
    //         this.data.push({key: 'aa'}, {key: 'bb'});
    //         this.setState({
    //             data: this.data,
    //         }, () => {
    //             console.log('state ' + Date());
    //             console.log(this.state.data);
    //         });
    //     }, 1000);
    //
    // }

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };


    }
    render() {
        return (
            <ListView style={styles.listStyle}
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text style={styles.textStyle}>{rowData}</Text>}
            />
        );
    }
    // render() {
    //     return (
    //         <View style={styles.containter}>
    //             <FlatList style={styles.listStyle}
    //                       data={this.state.data}
    //                       renderItem={({item}) => <Text style={styles.textStyle}>{item.key}</Text>}
    //             />
    //         </View>
    //     );
    // }
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