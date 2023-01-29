import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: '#0F0F0F0F',
        bottom: 0,
        shadowColor: '#0F0F0F',
        shadowRadius: 10,
        shadowOpacity: 0.2

    },
    icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        padding: 30,

    }
});

export default styles;