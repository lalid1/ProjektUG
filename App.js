import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from "./pages/MainPage";
import ResetPasswordPage from './pages/ResetPasswordPage';
import TransactionPage from './pages/TransactionPage';
import ProfilePage from './pages/ProfilePage';


const Login = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <LoginPage navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const Register = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <RegisterPage navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const ResetPassword = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <ResetPasswordPage navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const Main = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <MainPage navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const Transaction = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <TransactionPage navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const Profile = (props) => {

  return (
    <View style={{ flex: 1 }}>
      <ProfilePage navigation={props.navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

const RootStack = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  ResetPassword: {
    screen: ResetPassword
  },
  Main: {
    screen: Main
  },
  Transaction: {
    screen: Transaction
  },
  Profile: {
    screen: Profile
  },
});


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


