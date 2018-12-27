import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Screens/StartUpScreen/LaunchScreen';
import LoginScreen from '../Screens/StartUpScreen/LoginScreen';
import RegistrationScreen from '../Screens/StartUpScreen/RegistrationScreen';
import ForgotScreen from '../Screens/StartUpScreen/ForgotScreen';
import Dashboard from './Dashboard';
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



const StackTab = StackNavigator({
    TabLaunch: { screen: Launch },
    TabSignIn: { screen: Login },
    TabSignUp: { screen: Registration },
    TabForgot: { screen: Forgot },
    Dashboard: {
        screen: Dashboard, navigationOptions: () => ({
            header: null,

        })
    },
});

export default class MainApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StackTab />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});














