/**
 * Created by Young on 2018/7/3.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';

import {addTodo, reduceTodo, updateText} from "./Action/index";

const {width, height} = Dimensions.get('window');

class ReduxCompent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('🍎🍎🍎🍎🍎🍎');
        console.log(this.props);
        const {dispatch, todos, counter} = this.props;
        let num = counter.num;
        let text = todos.text;
        return (
            <View style={styles.containter}>
                <TouchableOpacity style={[styles.row, {marginTop:100}]}
                                  onPress={() => {dispatch(addTodo(++num))}}>
                    <Text>点击就加1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}
                                  onPress={() => {dispatch(reduceTodo(--num))}}>
                    <Text>点击就减1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.row}
                                  onPress={() => {dispatch(updateText('ReactNative'))}}>
                    <Text>修改Text值</Text>
                </TouchableOpacity>
                <View style={[styles.row, styles.text]}>
                    <Text>当前num值是：<Text style={styles.red}>{num}</Text>，当前的Text值是：<Text style={styles.red}>{text}</Text></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    row:{
        height:40,
        width:width,
        marginTop:10,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'#aaa',
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        backgroundColor:'#f0f0f0',
        alignItems:'flex-start',
        paddingLeft:10,
    },
    red: {
        color: 'red',
    }
});

const mapStateToProps = ({ todos, counter }) => ({ todos, counter });

export default connect(mapStateToProps)(ReduxCompent);