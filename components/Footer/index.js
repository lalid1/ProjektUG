import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles.js';
import MenuButton from '../MenuButton/index'

const Footer = (props) => {

  const { homeType, transType, profileType } = props

  const homePageIcons = {
  home: require('../../assets/home-white.png'),
transaction: require('../../assets/transaction.png'),
profile: require('../../assets/profile.png')}

const transactionPageIcons = {
  home: require('../../assets/home.png'),
transaction: require('../../assets/transaction-white.png'),
profile: require('../../assets/profile.png')}

const profilePageIcons = {
  home: require('../../assets/home.png'),
transaction: require('../../assets/transaction.png'),
profile: require('../../assets/profile-white.png')}

const icons = profileType === 'primary' ? profilePageIcons : (transType === 'primary' ? transactionPageIcons : homePageIcons);

  return (
    <View style={styles.container}>

      <MenuButton
        source={icons.home}
        type={homeType} 
        onPress={() => 
          props.navigation.navigate('Main', { 'navigation': props.navigation, 'login': props.login })
        }
        navigation={props.navigation}
        />

      <MenuButton
        source={icons.transaction}
        type={transType}
        onPress={() => 
          props.navigation.navigate('Transaction', { 'navigation': props.navigation, 'login': props.login})
        }
        navigation={props.navigation}
      />

      <MenuButton
        source={icons.profile}
        type={profileType}
        onPress={() => 
          props.navigation.navigate('Profile', { 'navigation': props.navigation, 'login': props.login })
        }
        navigation={props.navigation}
      />

    </View>
  );
};

export default Footer;