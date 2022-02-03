import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TitleText from './TitleText';
import Colors from '../constants/colors';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Footer = props => {
    return (
        <View style={styles.bottomView}>
            <TitleText>{props.textStyle}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: color = Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        bottom: 0,
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Footer;
