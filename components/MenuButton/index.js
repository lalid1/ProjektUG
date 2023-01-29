import React from 'react';
import { View, Image, Pressable } from 'react-native';
import styles from './styles.js';

const StyledButton = (props) => {

    const { type, source, onPress } = props

    const primaryStyle = {
        backgroundColor: '#26B534',
        shadowColor: '#0F0F0F',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        paddingTop: 10
    }

    const addStyle = type === 'primary' ? primaryStyle : {};

    return (
        <View style={[styles.container, addStyle]}>
            <Pressable
                style={[styles.button]}
                onPress={onPress}>
                <Image style={styles.icon} source={source} />
            </Pressable>
        </View>
    );
};

export default StyledButton;