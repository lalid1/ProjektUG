import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import styles from './styles.js';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index';
import MainPageBalanceView from './MainPageViews/MainPageBalanceView/index.js';
import MainPageTransactionsView from './MainPageViews/MainPageTransactionsView/index.js';
import { users } from '../RegisterPage/index'

const MainPage = (props) => {

    var login = props.navigation.getParam('login', null)
    var user = users[login]
    
    return (
        <View style={[styles.container, { flexDirection: 'column' }]}>
            <Header
                style={{ flex: 1 }} />
            <MainPageBalanceView amount={user.balance} />
            <MainPageTransactionsView list={user.transactions}/>
            <Footer
                style={{ flex: 1 }}
                homeType='primary'
                navigation={props.navigation}
                login={login} />
        </View>
    );
};

export default MainPage;