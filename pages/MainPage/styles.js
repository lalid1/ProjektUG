import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    width: '100%',
    flex: 1,
  },
  balance: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
  },
  headTitle: {
    fontSize: 30,
    fontWeight: '500'
  },
  headAmount: {
    fontSize: 60,
    fontWeight: '700',
  },
  transactions: {
    flex: 3,
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
    width: '100%'
  },
  listTitle: {
    paddingBottom: 10, 
    fontSize: 25 
  },
  listContent: {
    width: '100%' 
  }


});

export default styles;