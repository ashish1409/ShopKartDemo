import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Body, Icon, Right, ListItem, List, Left, Button, Switch, CardSwiper } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class ProfileBody extends Component {
  render() {



    const itemsNavigat = [
      { name: 'Order', details: 'Check your order status', imageUrl: 'alpha-o', imageUrl1: 'ios-arrow-forward' },

      { name: 'Help Center', details: 'Helpregarding your recent purches', imageUrl: 'alpha-h', imageUrl1: 'ios-arrow-forward' },

      { name: 'Shopkart Insider', details: 'Perks, Privilages, Pride', imageUrl: 'alpha-s', imageUrl1: 'ios-arrow-forward' },

      { name: 'Wishlist', details: 'Your most loved styles', imageUrl: 'alpha-w', imageUrl1: 'ios-arrow-forward' },

      { name: 'Collections', details: 'All your curated product collections ', imageUrl: 'alpha-c', imageUrl1: 'ios-arrow-forward' },

      { name: 'Liked Products', details: 'All products liked by you ', imageUrl: 'alpha-l', imageUrl1: 'ios-arrow-forward' },

      { name: 'Shopkart Credit', details: 'Mangage all your refunds & gift CardSwiper', imageUrl: 'alpha-s', imageUrl1: 'ios-arrow-forward' },

      { name: 'PhonePe Wallet', details: 'Check your wallet belance & PhonePe profile ', imageUrl: 'alpha-p', imageUrl1: 'ios-arrow-forward' },

      { name: 'Shopkart Points ', details: 'Earned Points as you Shop', imageUrl: 'alpha-s', imageUrl1: 'ios-arrow-forward' },

      { name: 'Saved Cards', details: 'Save your credit cards for faster checkout', imageUrl: 'alpha-s', imageUrl1: 'ios-arrow-forward' },

      { name: 'Address ', details: 'Save Address', imageUrl: 'alpha-a', imageUrl1: 'ios-arrow-forward' },

      { name: 'Coupons', details: 'Manage coupons for additional discount', imageUrl: 'alpha-c', imageUrl1: 'ios-arrow-forward' },

      { name: 'Profile Details', details: ' Change your profile details ', imageUrl: 'alpha-p', imageUrl1: 'ios-arrow-forward' },

      { name: 'Setting', details: 'Manage your app Notifaction & settings ', imageUrl: 'alpha-s', imageUrl1: 'ios-arrow-forward' }
    ];

    return (
      <ScrollView style={styles.scrollContainer}>

        <List dataArray={itemsNavigat}
          renderRow={(item) =>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: 'rgba(214, 48, 49,1.0)' }}>
                  <MaterialCommunityIcons style={styles.menuIcon1} name={item.imageUrl} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.txtHead}>{item.name}</Text>
                <Text style={styles.txtDetails}>{item.details}</Text>
              </Body>
              <Right>
                <MaterialCommunityIcons name={item.imageUrl} />
              </Right>
            </ListItem>
          }>
        </List>
        <View style={styles.buttonContainer} >
          <TouchableOpacity>
            <Button block style={styles.buttonAuth} onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonAuthText}>Log out</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    width: null,
    alignSelf: "stretch"
  },
  menuIcon1: {
    color: '#fff',
    fontSize: 25,
    marginRight: 0,
    fontWeight: 'bold',
  },
  txtHead: {
    fontSize: 14,
    color: '#2C3A47'
  },
  txtDetails: {
    fontSize: 12,
    color: '#9a9a9a'
  },
  buttonAuth: {
    marginBottom: 10,
    color: '#000',
    backgroundColor: 'rgba(214, 48, 49,1.0)',
  },
  buttonAuthText: {
    color: '#fff',
    fontSize: 18,
  },
  buttonContainer: {
    margin: 10,
  },

});
