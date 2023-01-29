import { View, Text, } from 'react-native';
import React from 'react';
import styles from './styles.js';

const MainPageBalanceView = (props) => {
    const amount = props.amount

    return (
        <View style={styles.balance}>
            <Text style={styles.headTitle}>BALANCE</Text>
            <Text style={styles.headAmount}>{amount + '$'}</Text>
        </View>
    )
};

export default MainPageBalanceView;