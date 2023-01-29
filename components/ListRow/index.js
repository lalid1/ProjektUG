import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles.js';

const Header = (props) => {

    const {item} = props;

    const color = item.amo < 0 ? 'red' : 'green';

    return (
        <View style={styles.listRow}>
        <View style={styles.transactionText}>
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionUser}>{item.username}</Text>
        </View>
        <View style={{
            justifyContent: 'center'
        }}>
            <Text style={[styles.transactionAmount, {color: color}]}>{item.amo + '$'}</Text>
        </View>
    </View>
    );
};

export default Header;