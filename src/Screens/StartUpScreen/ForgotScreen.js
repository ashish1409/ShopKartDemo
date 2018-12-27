import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated, Keyboard, KeyboardAvoidingView
} from 'react-native';
import { Button, Form, Item, Label, Input } from 'native-base';
import GlobleStyle, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../../Assets/GlobleStyle'
import logo from '../../images/logo2.png';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container1}
        behavior="padding"
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.containerImage}>
              {/* <Image source={require('../../images/logo2.png')} style={styles.image} /> */}
              <Animated.Image source={logo} style={[GlobleStyle.logo, styles.image, { height: this.imageHeight }]} />
              <Text style={styles.txtHead}>RESET PASSWORD</Text>
              <Text style={styles.txtHead1}>Quality you’d expect at prices you </Text>
              <Text style={styles.txtHead1}>Wouldn’t .</Text>
            </View>
            <View style={styles.signIn}>
              <Form>
                <Item stackedLabel last>
                  <Label>Email Id</Label>
                  <Input />
                </Item>

              </Form>
            </View>
            <View style={styles.buttonContainer} >
              <TouchableOpacity>
                <Button block style={styles.buttonAuth}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Text style={styles.buttonAuthText}>Reset Password</Text>
                </Button>
                <Button block style={styles.buttonAuth}
                  onPress={() => this.props.navigation.navigate('Launch')}>
                  <Text style={styles.buttonAuthText}>Back To Launch Screen</Text>
                </Button>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </KeyboardAvoidingView>

    );
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
    // resizeMode: 'contain'
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
    fontSize: 16,
  },
  signIn: {
    backgroundColor: '#ffffff',
    color: '#000',
    borderRadius: 4,
    margin: 10


  },
});