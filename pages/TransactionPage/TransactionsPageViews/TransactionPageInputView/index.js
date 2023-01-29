import { View, Text } from 'react-native';
import React, { useState } from 'react';
import StyledInput from '../../../../components/StyledInput/index';
import StyledButton from '../../../../components/StyledButton/index';
import styles from './styles.js';

const TransactionPageInputView = (props) => {

    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [password, setPassword] = useState('');

    function onPressSendAction() {
        if (recipient === null) {
            console.warn("Can't find user with given username.")
        } else if (amount > 10000) {
            console.warn("Max amount is 10,000$.")
        } else if (password === null) {
            console.warn("Incorrect password")
        } else {
            console.warn('Send ' + amount + '$ to ' + recipient)
        }
    }
    
    return (
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
                onPress={onPressSendAction()} />
        </View>
    );
};

export default TransactionPageInputView;