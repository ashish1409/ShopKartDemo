import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import Screen1 from '../Screens/InnerScreen/DashboardPages/Screen1';
import Profile from '../Screens/InnerScreen/ProfilePages/Profile';
import Cart from '../Screens/InnerScreen/CartPages/Cart';
import Offer from '../Screens/InnerScreen/OfferPage/Offer';
import Categories from '../Screens/InnerScreen/CategoriePages/Categorie';


import Entypo from 'react-native-vector-icons/Entypo';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import DrawerScreen from './DrawerScreen';


const Home = StackNavigator({
    Home: {
        screen: Screen1,
        navigationOptions: () => ({
            title: 'Home',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(214, 48, 49,1.0)',
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
            },

        })
    }
}, {
        headerMode: 'none'
    });

const categories = StackNavigator({
    Categories: {
        screen: Categories,
        navigationOptions: () => ({

            title: 'Categories',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(214, 48, 49,1.0)',
                elevation: 0,
                showdowOpacity: 0
            },

            tabBarIcon: ({ tintColor }) => {
                return (
                    <Foundation
                        name='indent-more'
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


const profile = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: () => ({

            title: 'Profile',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(214, 48, 49,1.0)',
                elevation: 0,
                showdowOpacity: 0
            },

            tabBarIcon: ({ tintColor }) => {
                return (
                    <MaterialCommunityIcons
                        name='account'
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

const cart = StackNavigator({
    Cart: {
        screen: Cart,
        navigationOptions: () => ({

            title: 'Cart',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(214, 48, 49,1.0)',
                elevation: 0,
                showdowOpacity: 0
            },

            tabBarIcon: ({ tintColor }) => {
                return (
                    <Entypo
                        name='shopping-bag'
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

const offer = StackNavigator({
    Offer: {
        screen: Offer,
        navigationOptions: () => ({

            title: 'Offer',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'rgba(214, 48, 49,1.0)',
                elevation: 0,
                showdowOpacity: 0
            },

            tabBarIcon: ({ tintColor }) => {
                return (
                    <MaterialCommunityIcons
                        name='alert-decagram'
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
    TabHome: { screen: Home },
    TabCategories: { screen: categories },
    TabOffer: { screen: offer },
    TabProfile: { screen: profile },
    TabCart: { screen: cart }

}, {
        tabBarOptions: {
            showIcon: true,
            style: {
                backgroundColor: '#fff',

            },
            inactiveTintColor: '#7f8c8d',
            activeTintColor: 'rgba(214, 48, 49,1.0)',
            tabStyle: { marginTop: 10 },
        }

    });

const StackTab = StackNavigator({
    Tabs: TabNav,
});


export default Drawer = DrawerNavigator({

    Tabs: {
        screen: StackTab
    },

}, {
        drawerWidth: 320,
        contentComponent: props => <DrawerScreen  {...props} />,

    });