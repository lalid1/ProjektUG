import { View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import StyledButton from '../../components/StyledButton/index.js';
import StyledInput from '../../components/StyledInput/index.js';
import styles from './styles.js';

const ResetPasswordPage = (props) => {

    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : "height"}
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
                    <View style={[styles.footer, { flex: 3 }]}>
                        <View style={styles.register}>
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
                                    text={'back'}
                                    onPress={() =>
                                        props.navigation.goBack()
                                    } />
                                <StyledButton
                                    text={'set password'}
                                    onPress={() => {
                                        if (password !== repPassword) {
                                            console.warn("Passwords are different")
                                        } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
                                            console.warn("Incorrect password")
                                        } else {
                                            props.navigation.navigate('Login', { 'navigation': props.navigation })
                                            console.warn('Password changed successfully')
                                        }
                                    }} />
                            </View>

                        </View>
                    </View>
                    <StatusBar style="auto" />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    );
};

export default ResetPasswordPage;