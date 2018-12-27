import React, { Component } from 'react';
import { Container, View, Content, Button, Text, Right, Icon, Left, Header, Body, List, ListItem, Thumbnail, } from 'native-base';
import { StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import GridView from 'react-native-super-grid';
import { Col, Row, Grid } from 'react-native-easy-grid';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default class DrawerScreen extends React.Component {

  render() {
    const items = [
      { name: 'Shop', imageUrl: 'shop' }, { name: 'Bag', imageUrl: 'shopping-bag' },
      { name: 'Notification', imageUrl: 'bell' }, { name: 'WishList', imageUrl: 'archive' },
    ];
    const itemsNavigat = [
      { name: 'My Account', imageUrl: 'account-key' }, { name: 'Offer', imageUrl: 'alert-decagram' }, { name: 'Help Center', imageUrl: 'access-point' }, { name: 'Reward Points', imageUrl: 'coins' }, { name: 'Log Out', imageUrl: 'logout' }
    ];

    return (
      <View style={styles.container}>
        <View style={styles.titleSection}>
          <View>
            <Text style={styles.textSideBar}>Side Bar </Text>
          </View>
          <View >
            <Icon style={styles.closeIcon} name='close' />
          </View>
        </View>
        <ImageBackground style={styles.ImageBanner} source={require('../images/offer1.jpg')} />
        <GridView
          itemDimension={100}
          items={items}
          style={styles.gridView}
          renderItem={item => (
            <TouchableOpacity>
              <View style={[styles.itemContainer]}>
                <View style={styles.blockText} >
                  <Entypo style={styles.menuIcon} name={item.imageUrl} />
                  <Text style={styles.itemName}>{item.name}</Text>

                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={styles.lastContainer}>
          <View>
            <List dataArray={itemsNavigat}
              renderRow={(item) =>
                <ListItem>
                  <MaterialCommunityIcons style={styles.menuIcon1} name={item.imageUrl} />
                  <Text>{item.name}</Text>
                </ListItem>
              }>
            </List>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',

    justifyContent: 'center',
    alignItems: 'stretch',

  },
  gridView: {
    paddingTop: 0,
    flex: 1,
  },
  lastContainer: {
    flex: 1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingTop: 0,
    marginTop: 0,

  },
  textSideBar: {
    color: '#fff',
    marginTop: 40,
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  ImageBanner: {
    width: '100%',
    height: 150,
    marginTop: 10,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,

  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  closeIcon: {
    color: '#fff',
    marginTop: 40,
    marginRight: 10,
    fontSize: 28,
  },
  titleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(214, 48, 49,1.0)',
    color: '#fff'
  },
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    height: 135,
    backgroundColor: 'rgba(214, 48, 49,1.0)',
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },

  blockText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  menuIcon: {
    color: '#fff',
    fontSize: 40,
  },
  menuIcon1: {
    color: '#2C3A47',
    fontSize: 24,
    marginRight: 10
  },

});
