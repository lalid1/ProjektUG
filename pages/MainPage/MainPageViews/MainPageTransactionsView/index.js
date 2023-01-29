import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import styles from './styles.js';
import { FlatList } from 'react-native-gesture-handler';
import ListRow from '../../../../components/ListRow/index';

const MainPageTransactionsView = (props) => {

    const { list } = props

    return (

        <View style={styles.transactions}>
            <Text style={styles.listTitle}>TRANSACTIONS</Text>
            <FlatList
                style={styles.listContent}
                data={list}
                renderItem={({ item }) => <ListRow item={item} />}
            />
        </View>

    );
};

export default MainPageTransactionsView;