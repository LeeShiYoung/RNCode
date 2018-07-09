/**
 * Created by Young on 2018/7/9.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'

let titleWidth = Dimensions.get('window').width - 70 - 20 - 10;
export default class HomeCell extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {thumbnail_pic_s, title} = this.props.data;

        return (
            <TouchableOpacity style={styles.itemStyle}
                              onPress={() => this.props.didSelected(this.props.data)}>
                <Image source={{uri: thumbnail_pic_s.replace('http', 'https')}}
                       style={styles.imageStyle}/>
                <View style={styles.subItemStyle}>
                    <Text style={[styles.titleStyle, {fontSize: 15}]}>
                        {title}
                    </Text>
                    <Text style={[styles.titleStyle, {fontSize: 13}]}>
                        这个是副标题
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

HomeCell.propTypes = {
    data: PropTypes.object,
    didSelected: PropTypes.func,
};

const styles = StyleSheet.create({
    itemStyle: {
        flexDirection: 'row',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 0.5,
    },
    imageStyle: {
        width: 70,
        height: 70,
        marginLeft: 10,
        margin: 10,
    },
    subItemStyle: {
        justifyContent: 'space-around',
    },
    titleStyle: {
        margin: 5,
        width: titleWidth,
    }
});