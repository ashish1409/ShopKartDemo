import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';

export default TabNav = TabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconFontAwesome
            name='home'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
  Screen2: {
    screen: Screen2,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconMaterialIcons
            name='favorite-border'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
  Screen3: {
    screen: Screen3,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons
            name='ios-contacts-outline'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  },
  Screen4: {
    screen: Screen4,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => {
        return (
          <IconIonicons
            name='ios-contacts-outline'
            size={26}
            color={tintColor}
          />
        );
      }
    })
  }
}, {
    tabBarOptions: {
      showIcon: true
    }
  });