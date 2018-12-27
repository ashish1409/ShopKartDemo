import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import LaunchScreen from '../Screens/LaunchScreen';
import LoginScreen from '../Screens/LoginScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import ForgotScreen from '../Screens/ForgotScreen';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import DrawerScreen from '../DrawerScreen';



const Launch = StackNavigator({
  Launch: {
    screen: LaunchScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    }),

  }
}, {
    headerMode: 'none'
  });




const Login = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
      tabBarOptions: {
        visible: false
      },
    })
  }
}, {
    headerMode: 'none'
  });

const Registration = StackNavigator({
  Registration: {
    screen: RegistrationScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    })
  }
}, {
    headerMode: 'none'
  });

const Forgot = StackNavigator({
  Forgot: {
    screen: ForgotScreen,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
    }),
    style: {
      backgroundColor: 'blue',
    },
  }
}, {
    headerMode: 'none'
  });





















const Home = StackNavigator({
  Home: {
    screen: Screen1,
    navigationOptions: () => ({
      title: 'Home',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0

      },
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
  }
}, {
    headerMode: 'none'
  });

const Favorite = StackNavigator({
  Favorite: {
    screen: Screen2,
    navigationOptions: () => ({
      tabBarVisible: false,
      header: null,
      title: 'Favorite',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#4f3403',
        elevation: 0,
        showdowOpacity: 0
      },

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
  }
}, {
    headerMode: 'none'
  });

const TabNav = TabNavigator({
  TabLaunch: { screen: Launch },
  TabSignIn: { screen: Login },
  TabSignUp: { screen: Registration },
  TabForgot: { screen: Forgot },
  TabHome: { screen: Home },
  TabFavorite: { screen: Favorite },

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
  }
}, {
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: '#4f3403'
      },
      inactiveTintColor: 'white',
      activeTintColor: '#e0ab18'
    }

  });
// tabBarOptions: {
//   style: {
//     backgroundColor: 'red',
//     padding: 8,
//     marginTop: 10
//   },
//   indicatorStyle: {
//     borderBottomColor: '#ffffff',
//     borderBottomWidth: 3,
//   },
//   tabStyle: {
//     borderRightColor: '#ffffff',
//     borderRightWidth: 1,
//     display: 'none'
//   }
// }
const StackTab = StackNavigator({
  Tabs: TabNav,


});


export default Drawer = DrawerNavigator({
  Tabs: {
    screen: StackTab
  }
}, {
    contentComponent: props => <DrawerScreen {...props} />
  });