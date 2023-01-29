import { View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StyledButton from '../../components/StyledButton/index.js';
import StyledInput from '../../components/StyledInput/index.js';
import styles from './styles.js';
import React, { useState } from 'react';
import {users} from '../RegisterPage/index'



const LoginPage = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[styles.container, { flexDirection: 'column' }]}>
                    <View style={{
                        flex: 4,
                        justifyContent: 'center',
                        paddingTop: 30
                    }}>
                        <Image
                            source={require('../../assets/logo-no-background.png')}
                            resizeMode='contain'
                            style={{ width: 300, alignSelf: 'center' }} />
                    </View>
                    <View style={[styles.footer, { flex: 5 }]}>
                        <View style={styles.login}>
                            <StyledInput
                                text={'login'}
                                onChangeText={(value) => setLogin(value)} />
                            <StyledInput
                                type={'password'}
                                text={'password'}
                                onChangeText={(value) => setPassword(value)} />
                            <View style={{ 'flexDirection': 'row', padding: 2 }}>
                                <StyledButton
                                    type={'primary'}
                                    text={'login'}
                                    onPress={() => {
                                        if (users[login] != null) {
                                            var user = users[login]
                                            if ( user.password == password) {
                                                props.navigation.navigate('Main', { 'navigation': props.navigation, 'login': user.login})
                                            } else {
                                                console.warn('Incorrect credentials!')
                                            }
                                        } else {
                                            console.warn('No such user in database!')
                                        }
                                    }
                                    } />
                                <StyledButton
                                    text={'register'}
                                    onPress={() =>
                                        props.navigation.navigate('Register', { 'navigation': props.navigation })
                                    } />
                            </View>
                            <Text
                                style={{ color: '#1F6F0F8F' }}
                                onPress={() =>
                                    props.navigation.navigate('ResetPassword', { 'navigation': props.navigation })
                                }>
                                Password reset
                            </Text>
                        </View>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default LoginPage;