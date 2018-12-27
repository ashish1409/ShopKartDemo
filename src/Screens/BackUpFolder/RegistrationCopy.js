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

export default class App extends Component {
    render() {
        return (
            <ImageBackground source={require('../images/t1.jpg')}
                style={styles.backgroundImage}>


                <View style={{ flex: 1 }} style={styles.headerContainer}>
                    <View style={{ flex: 1 }} >
                        <Text></Text>
                    </View>
                    <View style={styles.signUp}>
                        <Form>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item stackedLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
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
                                onPress={() => this.props.navigation.navigate('Launch')}>
                                <Text style={styles.buttonAuthText}>Back To Launch Screen</Text>
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
    buttonContainer: {
        flex: .10,
        margin: 10,
    },
    buttonAuth: {
        marginBottom: 10,
        color: '#ffffff',
        backgroundColor: 'rgba(234, 188, 46, .9)',
    },

    buttonAuthText: {
        color: '#fff',
    },
    signUp: {
        backgroundColor: '#ffffff',
        color: '#000',
        borderRadius: 4,
        margin: 10

    },
    headerContainer: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)"
    },

});