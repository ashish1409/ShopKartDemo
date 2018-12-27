import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Icon } from 'native-base';

import MainHeader from './MainHeader';
import MidSection from './MidSection';
import MainBodyList from './MainBodyList';
export default class App extends Component {

  navOptions

  static navigationOptions = ({ navigation }) => {

    navOptions = navigation;
    const { params = {} } = navigation.state;

    return {
      headerLeft: (
        <Button
          transparent
          onPress={() => params._onHeaderEventControl()}
        >
          <Icon
            name="menu"
            style={{ fontSize: 30, color: 'white' }}
          />
        </Button>
      )
    }
  }

  onHeaderEventControl() {
    const { params = {} } = navOptions.state;
    params._openNav()
  }

  componentDidMount() {
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHeaderEventControl,
      _openNav: () => this.openDrawer()
    })
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <MainHeader />
          <MidSection />
          <MainBodyList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
});