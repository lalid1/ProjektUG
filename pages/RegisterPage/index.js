import { View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import StyledButton from '../../components/StyledButton/index.js';
import StyledInput from '../../components/StyledInput/index.js';import styles from './styles.js';

export var users = {
        'lalid_00': {
            login:  'lalid_00',
            password: "abc",
            email: 'lalid.elali1@gmail.com',
            balance: 123456.78,
            transactions: [
                { username: 'krzysiek', title: 'Ziemniory', amo: -256.99 },
                { username: 'maciek', title: 'Tanie ubrania', amo: -20 },
                { username: 'czesiek', title: 'Drogie ubrania', amo: -350 },
                { username: 'maciek', title: 'Wódeczka', amo: -26.99 },
                { username: 'kubuś', title: 'Burrito', amo: -25.99 },
                { username: 'Boss', title: 'Salary', amo: 20000.89 },
                { username: 'Boss', title: 'Salary', amo: 20000.89 },
                { username: 'Boss', title: 'Salary', amo: 20000.89 },
            ]
        },
        'x': {
            login:  'x',
            password: "abc",
            email: 'lalid.elali1@gmail.com',
            balance: 123456.78,
            transactions: [
                { username: 'krzysiek', title: 'Ziemniory', amo: -256.99 },
                { username: 'maciek', title: 'Tanie ubrania', amo: -20 },
                { username: 'czesiek', title: 'Drogie ubrania', amo: -350 },
                { username: 'maciek', title: 'Wódeczka', amo: -26.99 },
                { username: 'kubuś', title: 'Burrito', amo: -25.99 },
                { username: 'Boss', title: 'Salary', amo: 20000.00 },
                { username: 'Boss', title: 'Salary', amo: 20000.00 },
                { username: 'Boss', title: 'Salary', amo: 20000.00 },
            ]
        }
    }

    

const RegisterPage = (props) => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [repEmail, setRepEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    const [register, setRegister] = useState(false);

    function onPressRegisterAction() { 
        if(register === true) {
            if (email !== repEmail) {
            console.warn("E-mails are different.")
            } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                console.warn("Incorrect email format.")
            } else if (password !== repPassword) {
                console.warn("Passwords are different")
            } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
                console.warn("Incorrect password")
            } else {
                users[login] = {
                    login:  login,
                    password: password,
                    email: email,
                    balance: 2000,
                    transactions: [
                        { username: 'Boss', title: 'Salary', amo: 2000.00 },
                    ]
                }
                
                props.navigation.navigate('Login', { 'navigation': props.navigation })
            }
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container, { flexDirection: 'column' }]}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        paddingTop: 30
                    }}>
                        <Image
                            source={require('../../assets/logo-no-background.png')}
                            resizeMode='contain'
                            style={{ width: 300, alignSelf: 'center' }} />
                    </View>
                    <View style={[styles.footer, { flex: 4 }]}>
                        <View style={styles.register}>
                            <StyledInput
                                text={'login'}
                                onChangeText={(value) => setLogin(value)} />
                            <StyledInput
                                text={'e-mail'}
                                onChangeText={(value) => setEmail(value)} />
                            <StyledInput
                                text={'repeat e-mail'}
                                onChangeText={(value) => setRepEmail(value)} />
                            <StyledInput
                                tooltipSize={'big'}
                                tooltipText={'Password must contain 8 to 20 characters with at least one numeric digit, one uppercase and one lowercase letter'}
                                type={'password'}
                                text={'password'}
                                onChangeText={(value) => setPassword(value)} />
                            <StyledInput
                                type={'password'}
                                text={'repeat password'}
                                onChangeText={(value) => setRepPassword(value)} />
                            <View style={{ 'flexDirection': 'row', padding: 2 }}>
                                <StyledButton
                                    type={'primary'}
                                    text={'login'}
                                    onPress={() =>
                                        props.navigation.navigate('Login', { 'navigation': props.navigation })
                                    } />
                                <StyledButton
                                    text={'register'}
                                    onPress={() => {
                                        setRegister(true)
                                        onPressRegisterAction()}
                                        } />
                            </View>
                        </View>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default RegisterPage;