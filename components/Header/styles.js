import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#26B534',
        top: 0,
        shadowColor: '#0F0F0F',
        shadowRadius: 10,
        shadowOpacity: 0.9

    },
    logo: {
        width: 140,
        height: 60,
        resizeMode: 'contain',

    },
    text: {
        fontWeight: '500',
        textTransform: 'uppercase',
    }
});

export default styles;