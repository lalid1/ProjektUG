import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index';
import StyledInput from '../../components/StyledInput/index.js';
import StyledButton from '../../components/StyledButton/index.js';
import styles from './styles.js';
import { users } from '../RegisterPage/index'


const MainPage = (props) => {

    var login = props.navigation.getParam('login', null)
    var user = users[login]

    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.container, { flexDirection: 'column', }]}>
            <Header style={{ flex: 1 }} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Text style={{ fontSize: 40, padding: 10, fontWeight: '700', color: '#171A20C' }}>TRANSACTION</Text>
                <StyledInput
                    text={"recipient's username"}
                    onChangeText={(value) => setRecipient(value)} />
                <StyledInput
                    text={'amount'}
                    onChangeText={(value) => setAmount(value)} />
                <StyledInput
                    type={'password'}
                    text={'password'}
                    onChangeText={(value) => setPassword(value)} />
                <StyledButton
                    type={'primary'}
                    size={'big'}
                    text={'send'}
                    onPress={() => {
                        null
                    }} />

            </View>
            <Footer
                style={{ flex: 1 }}
                transType='primary'
                navigation={props.navigation}
                login={login} />
        </View>
    );
};

export default MainPage;