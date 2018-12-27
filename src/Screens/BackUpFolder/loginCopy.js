
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { Button, Form, Item, Label, Input } from 'native-base';
import Logo from './Logo';

export default class App extends Component {
    render() {
        return (


            <ImageBackground source={require('../images/p1.jpg')}
                style={styles.backgroundImage}>
                <View style={{ flex: 1 }} style={styles.headerContainer}>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={styles.containerImage}>
                        <Image source={require('../images/logo2.png')} style={styles.image} />
                    </View>
                    <View style={styles.signIn}>
                        <Form>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                    </View>
                    <View style={styles.buttonContainer} >
                        <TouchableOpacity>
                            <Button block style={styles.buttonAuth}
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Sign In</Text>
                            </Button>
                            <Button block style={styles.buttonAuth}
                                onPress={() => this.props.navigation.navigate('Launch')}>
                                <Text>Back To Launch Screen</Text>
                            </Button>
                        </TouchableOpacity>
                    </View>




                </View>
            </ImageBackground>




        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    containerImage: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: .20,
        margin: 10,
    },
    buttonAuth: {
        marginBottom: 10,
        color: '#ffffff',
        backgroundColor: 'rgba(234, 188, 46, .9)',
    },
    welcome: {
        fontSize: 24,
        textAlign: 'center',
        margin: 0,
        paddingTop: 0,
    },
    signIn: {
        backgroundColor: '#ffffff',
        color: '#000',
        borderRadius: 4,
        margin: 10

    },
    headerContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)"
    },
    image: {
        width: '30%',
        height: '30%',
    },

});