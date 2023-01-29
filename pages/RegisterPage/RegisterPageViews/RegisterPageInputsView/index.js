import { View } from 'react-native';
import React, { useState } from 'react';
import StyledButton from '../../../../components/StyledButton/index.js';
import StyledInput from '../../../../components/StyledInput/index.js';
import styles from './styles.js';

const RegisterPageInputsView = (props) => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [repEmail, setRepEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPassword, setRepPassword] = useState('');

    function onPressRegisterAction() {
        if (email !== repEmail) {
            console.warn("E-mails are different.")
        } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            console.warn("Incorrect email format.")
        } else if (password !== repPassword) {
            console.warn("Passwords are different")
        } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
            console.warn("Incorrect password")
        } else {
            console.warn('Registered:' + login)
        }
    }

    return (
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
                        onPress={onPressRegisterAction()} />
                </View>
            </View>
        </View>

    );
};

export default RegisterPageInputsView;