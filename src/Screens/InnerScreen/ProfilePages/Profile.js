import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProfileMainHeader from "./ProfileMainHeader";
import ProfileMidSection from "./ProfileMidSection";
import ProfileBody from "./ProfileBody";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProfileMainHeader />
        <ProfileMidSection />
        <ProfileBody />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});