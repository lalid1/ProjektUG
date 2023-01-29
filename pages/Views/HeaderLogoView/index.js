import { View, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';





const HeaderLogoView = (props) => {

    const [styleFlex] = props

    return (
        <View style={{
            flex: { styleFlex },
            justifyContent: 'center',
            paddingTop: 30
        }}>
            <Image
                source={require('../../../assets/logo-no-background.png')}
                resizeMode='contain'
                style={{ width: 300, alignSelf: 'center' }} />
        </View>

    );
};

export default HeaderLogoView;