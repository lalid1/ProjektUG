import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listRow: {
        flexDirection: 'row',
        backgroundColor: '#0F0F0F0F',
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1
      },
      transactionText: {
        flex: 1 
      },
      transactionTitle: {
        fontSize: 16, 
        maxHeight: 40
      },
      transactionUser: {
        fontSize: 10
      },
      transactionAmount: {
        fontSize: 20
      }
});

export default styles;