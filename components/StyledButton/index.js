import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';

const StyledButton = (props) => {

    const {type, text, onPress, size} = props

    const buttonWidth = size === 'big' ? '60%' : '30%';
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#26B534';
    const textColor = '#FFFFFF';
    return (
        <View style={[styles.container, {width: buttonWidth}]}>
            <Pressable 
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={onPress}>
            <Text style={[styles.text, {color: textColor}]}>{text}</Text>            
        </Pressable>
      </View>
    );
};

export default StyledButton;