import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from 'react-native';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
export default class App extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.containerImage}>
            <Image source={require('../../images/logo2.png')} style={styles.image} />
            <Text style={styles.txtHead}>ShopKart</Text>
            <Text style={styles.txtHead1}>The most fulfilling shopping</Text>
            <Text style={styles.txtHead1}>Experience</Text>
          </View>
          <View style={styles.buttonContainer} >
            <TouchableOpacity >
              <Button block style={styles.buttonAuth} onPress={() => navigate('Login')}>
                <Text style={styles.buttonAuthTxt}>Sign In</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button block style={styles.buttonAuth} onPress={() => navigate('Registration')} >
                <Text style={styles.buttonAuthTxt}>Sign Up</Text>
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button block style={styles.buttonAuth} onPress={() => navigate('Forgot')}>
                <Text style={styles.buttonAuthTxt}>Forgot Password</Text>
              </Button>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    flex: 1,
  },
  containerImage: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '30%',
    height: '30%',
  },
  txtHead: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 0,
    color: '#2C3A47'
  },
  txtHead1: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 0,
    color: 'rgba(44, 58, 71,1.0)'
  },
  buttonContainer: {
    margin: 10,
  },
  buttonAuth: {
    marginBottom: 10,
    color: '#000',
    backgroundColor: 'rgba(214, 48, 49,1.0)',
  },
  buttonAuthText: {
    color: '#fff',
    fontSize: 18,
  }
});






