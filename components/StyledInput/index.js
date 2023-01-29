import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles.js';
import { Tooltip } from '@rneui/themed';



const StyledInput = (props) => {
    
    const { type, text, onChangeText, fontType, tooltipText, tooltipSize} = props;
    
    const [open, setOpen] = React.useState(false);

    const secured = type === 'password' ? true : false;

    const fontSize = fontType === 'login' ? 25 : 16;

    const tooltipHeight = tooltipSize === 'big' ? 80 : 40;

    const tooltipWidth = tooltipSize === 'big' ? 350 : 200;

    return (
        <View style={styles.container}>
            <Tooltip
                visible={(tooltipText == null || tooltipText==='') ? false : open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                popover={<Text style={{color: '#FFF'}}>{tooltipText}</Text>}
                width={tooltipWidth}
                height={tooltipHeight}
                backgroundColor={'#171A20CC'}
            >
                <Text style={[styles.text, { fontSize: fontSize }]}>{text}</Text>
            </Tooltip>
            <TextInput
                onChangeText={onChangeText}
                style={styles.input}
                secureTextEntry={secured} />


        </View>
    );
};

export default StyledInput;