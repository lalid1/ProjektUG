import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles.js';

const Header = (props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo-no-background.png')} />
        </View>
    );
};

export default Header;